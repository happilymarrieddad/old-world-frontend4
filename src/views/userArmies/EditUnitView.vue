<script setup lang="tsx">
import { reactive, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserArmiesStore } from '@/stores/userArmies'
import type { UserArmy } from '@/gen/proto/userarmies/armies_pb'
import { useRouter } from 'vue-router'
import { useUserUnitsStore } from '@/stores/userUnits'
import type { ArmyUnit } from '@/gen/proto/userarmies/units_pb'
import {
  UpdateUnitRequest,
  UpdateUserArmyUnit,
  UpdateUserArmyUnitOptionValue
} from '@/gen/proto/userarmies/units-service_pb'
import type { UnitTypeOption } from '@/gen/proto/unittypes/types_pb'

const route = useRoute()
const appStore = useAppStore()
const userArmyStore = useUserArmiesStore()
const userUnitStore = useUserUnitsStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const userArmyName = ref('')
const userArmyTypeId = ref('')
let userArmyUnit = ref<ArmyUnit>()
const form = reactive({
  name: '',
  quantity: 1,
  minModels: 0,
  maxModels: 0,
  points: 0,
  options: [] as UnitTypeOption[]
})

const calculatePoints = async function () {
  // TODO: for some reason it's not updating the original row.. need to figure out why
  let pts = 0

  pts += form.quantity * Number(userArmyUnit.value?.unitType?.pointsPerModel)

  for (let i = 0; i < form.options.length; i++) {
    const opt = form.options[i]
    const multiplier = opt.perModel ? form.quantity : 1

    switch (opt.unitOptionTypeName) {
      case 'Single':
        if (opt.value?.isSelected) {
          pts += multiplier * Number(opt.points)
        }
        break
      case 'One Of':
        console.log(opt.value?.indexSelected)
        if (opt.value?.indexSelected.length) {
          for (let j = 0; j < opt.items.length; j++) {
            if (opt.items[j].id == opt.value?.indexSelected) {
              pts += multiplier * Number(opt.items[j].points)
            }
          }
        }
        break
      case 'Many Of':
        if ((opt.value?.idsSelected.length as number) > 0) {
          const idsSelected = opt.value?.idsSelected as string[]
          for (let j = 0; j < idsSelected.length; j++) {
            for (let k = 0; k < opt.items.length; k++) {
              if (opt.items[k].id == idsSelected[j]) {
                pts += multiplier * Number(opt.items[k].points)
              }
            }
          }
        }
        break
      case 'Many To':
        if ((opt.value?.qtySelected as bigint) > 0) {
          pts += Number(opt.value?.qtySelected as bigint) * Number(opt.points)
        }
        break
      default:
        console.log(opt.unitOptionTypeName, ' not handled for points calculation')
    }
  }

  form.points = pts
}

async function save() {
  const req = new UpdateUserArmyUnit({
    id: route.params.armyunitid as string,
    qty: { value: BigInt(form.quantity), case: 'qtyValue' },
    points: BigInt(form.points)
  })

  for (let i = 0; i < form.options.length; i++) {
    req.optionValues.push(form.options[i].value as unknown as UpdateUserArmyUnitOptionValue)
  }

  const err = await userUnitStore.updateUnit(new UpdateUnitRequest({ updateArmyUnit: req }))
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('Successfully updated user army unit')
  router.push(`/user-armies/edit/${route.params.userarmyid as string}`)
}

async function getUserUnitData() {
  const [ua, err] = await userUnitStore.getUnit(route.params.armyunitid as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  userArmyUnit.value = ua as ArmyUnit

  form.name = userArmyUnit.value.unitType?.name as string
  form.quantity = Number(userArmyUnit.value.quantity)
  form.options = userArmyUnit.value.unitType?.options as UnitTypeOption[]
  form.points = Number(userArmyUnit.value.points)
  form.minModels = Number(userArmyUnit.value.unitType?.minModels)
  form.maxModels = Number(userArmyUnit.value.unitType?.maxModels)
}

onMounted(async () => {
  const [res, err] = await userArmyStore.getUserArmy(route.params.userarmyid as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const existingUserArmy = res as UserArmy
  userArmyName.value = existingUserArmy.name
  userArmyTypeId.value = existingUserArmy.armyTypeId

  await getUserUnitData()
})
</script>

<template>
  <div class="user-armies-edit-unit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user-armies' }">User Armies</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: `/user-armies/edit/${route.params.userarmyid as string}` }"
        >{{ userArmyName }}</el-breadcrumb-item
      >
      <el-breadcrumb-item>Add Unit</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form :model="form" label-width="auto" style="max-height: 600px" v-loading="loading">
            <el-form-item label="Name">
              <el-input v-model="form.name" disabled />
            </el-form-item>
            <el-form-item label="Points">
              <el-input v-model="form.points" disabled />
            </el-form-item>
            <el-form-item
              :label="'Num Models - ' + userArmyUnit?.unitType?.pointsPerModel + ' pts per model'"
              v-if="form.maxModels > 1"
            >
              <el-input
                v-model="form.quantity"
                :min="form.minModels"
                :max="form.maxModels"
                @change="calculatePoints"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="save">Save</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <br />
    <br />
    <div v-if="form.options.length > 0" style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ width }">
          <table :width="width">
            <tbody>
              <tr v-for="(option, index) in form.options" :key="index">
                <td
                  v-html="
                    option.txt +
                    (option.points > 0
                      ? ' (' + option.points + 'pts' + (option.perModel ? ' per model)' : ')')
                      : '')
                  "
                ></td>
                <td>
                  <div style="display: flex; align-items: center">
                    <div v-if="option.unitOptionTypeName == 'Single'">
                      <el-switch
                        v-model="option.value.isSelected"
                        @change="calculatePoints"
                        size="large"
                      />
                    </div>
                    <div v-if="option.unitOptionTypeName == 'One Of'">
                      <el-select
                        v-model="option.value.indexSelected"
                        size="large"
                        @change="calculatePoints"
                        style="width: 300px"
                      >
                        <el-option
                          :key="''"
                          :label="'-- No option selected --'"
                          :value="''"
                        ></el-option>
                        <el-option
                          v-for="item in option.items"
                          :key="item.id"
                          :label="'(' + item.points + 'pts) ' + item.name"
                          :value="item.id"
                        ></el-option>
                      </el-select>
                    </div>
                    <div v-if="option.unitOptionTypeName == 'Many Of'">
                      <el-select
                        v-model="option.value.idsSelected"
                        multiple
                        filterable
                        size="large"
                        @change="calculatePoints"
                        style="width: 300px"
                      >
                        <el-option
                          v-for="item in option.items"
                          :key="item.id"
                          :label="
                            '(' + item.points + 'pts) ' + item.name + ' - ' + item.itemTypeName
                          "
                          :value="item.id"
                        >
                          <el-popover
                            placement="right-start"
                            :width="200"
                            trigger="hover"
                            :content="item.description"
                          >
                            <template #reference>
                              <span
                                v-html="
                                  '(' +
                                  item.points +
                                  'pts) ' +
                                  item.name +
                                  ' - ' +
                                  item.itemTypeName
                                "
                              ></span>
                            </template>
                          </el-popover>
                        </el-option>
                      </el-select>
                    </div>
                    <div v-if="option.unitOptionTypeName == 'Many To'">
                      <el-input v-model="option.value.qtySelected" type="number" min="0" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
