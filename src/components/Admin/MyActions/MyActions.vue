<template>
    <div class="my-actions">
        <div class="my-actions__header">
            <AdminPageTitle :title="pageTitle">
                {{
                pageSub
                }}
            </AdminPageTitle>
            <ActionButton v-if="mode === 'list'" title="Adicionar" :action="addNewAction" />
        </div>

        <!--List -->
        <div
            v-if="mode === 'list'"
            :class="{ centralize: !values.length }"
            class="my-actions__main"
        >
            <svg v-if="!values.length" class="not-found">
                <use xlink:href="@/assets/svg/no_data.svg#no-data" />
            </svg>
            <Table v-else :titles="titles" :values="values" />
        </div>

        <!--Register new action-->
        <div v-if="mode === 'content'">
            <!--Step 1-->
            <div v-if="step === 1" style="display: flex; flex-direction: column;">
                <label class="labelzinho" for="a">Titulo da ação</label>
                <input
                    class="inputzinho"
                    type="text"
                    id="a"
                    placeholder="Ex: Confecção de máscaras"
                />

                <label for="b" class="labelzinho">Subtítulo</label>
                <input
                    class="inputzinho"
                    type="text"
                    id="b"
                    placeholder="Ex: Postos de saúde precisam de máscaras"
                />

                <label class="labelzinho">Conteúdo</label>
                <VueEditor />
            </div>
            <!--Step 2-->
            <div v-if="step === 2" style="display: flex; flex-direction: column;">
                <label for="c" class="labelzinho">URL da Imagem</label>
                <input type="text" class="inputzinho" id="c" placeholder="Image URL" />

                <label for="cars" class="labelzinho">Autor:</label>

                <select name="authors" id="cars">
                    <option value="volvo">Vito</option>
                    <option value="saab">Arley</option>
                    <option value="mercedes">Lune</option>
                    <option value="audi">Sonic</option>
                </select>
            </div>
            <div style="display: flex; margin: 1rem 0;">
                <ActionButton
                    :title="previousStepButtonTitle"
                    :action="previousStepAction"
                    :filled="false"
                    style="margin-right: 2rem"
                />
                <ActionButton :title="nextStepButtonTitle" :action="nextStepAction" />
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import AdminPageTitle from '../General/AdminPageTitle'
import ActionButton from '../General/ActionButton'
import Table from '../General/Table'

export default {
    components: {
        VueEditor,
        AdminPageTitle,
        ActionButton,
        Table
    },
    data() {
        return {
            mode: 'list',
            step: 1,
            a: true,
            titles: [
                'Titulo',
                'Inicio',
                'Termino',
                'Responsavel',
                'Situacao'
            ],
            values: [
                {
                    title: 'Masks',
                    startDate: '1',
                    endDate: '2',
                    responsible: 'saas',
                    situation: 'hard'
                }
            ]
        }
    },
    computed: {
        pageTitle() {
            if (this.mode === 'list') {
                return 'Minhas ações'
            }

            if (this.mode === 'content' && this.step === 1) {
                return 'Passo 1'
            }

            return 'Passo 2'
        },
        pageSub() {
            if (this.mode === 'list') {
                return this.units
            }

            if (this.mode === 'content' && this.step === 1) {
                return 'Realize 2 passos para criar uma ação'
            }

            return 'Realize o último passo para criar uma ação'
        },
        nextStepButtonTitle() {
            if (this.step === 1) {
                return 'Continuar'
            }

            return 'Salvar'
        },
        previousStepButtonTitle() {
            if (this.step === 1) {
                return 'Cancelar'
            }

            return 'Voltar'
        },
        units() {
            return this.values.length
                ? `${this.values.length} Unidades`
                : 'Nenhuma unidade encontrada.'
        }
    },
    methods: {
        addNewAction() {
            this.mode = 'content'
        },
        nextStepAction() {
            if (this.step === 1) {
                this.step += 1
                return
            }

            if (this.step === 2) {
                console.log('salvo')
                this.step = 1
                this.mode = 'list'
            }
        },
        previousStepAction() {
            if (this.step === 1) {
                this.mode = 'list'
            }

            if (this.step === 2) {
                this.step -= 1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.centralize {
    margin-top: auto;
    margin-bottom: auto;
}

.not-found {
    height: 262px;
    width: 379px;
}

.inputzinho {
    background-color: #eeeeee;
    border: none;
    font-size: 1.4rem;
    font-family: 'Roboto';
    color: rgba($black, 0.8);
    padding: 1rem 1.5rem;
    border-radius: 0.7rem;
}

.labelzinho {
    margin: 1rem 0;
    font-size: 1.6rem;
    color: $black;
}

.my-actions {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    &__main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
