import { describe, it, expect, vi } from 'vitest'
import {createRouter, createWebHistory} from "vue-router";
import EintragList from "@/components/EintragList.vue";
import {mount} from "@vue/test-utils";

global.fetch = async () => ({
    json: async () => ({current: {temp_c: 28, condition: {icon: 'cloudy'}}})
})
describe('EintragList Test', () => {
    it('should display backend fetch', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{path: '/rest2', component: EintragList}]
        })
        const app = {
            use: (plugin) => {
                EintragList.setup({attrs: {$router: router}})
            },
            provide: {
                $fetch: async () => ({json: async () => ([{"id":1,"text":"War ganz gut, aber habe schon mal besser geegessen!","restID":0,"visitRating":0.0,"publishDate":null,"name":"Steffan Mahlsdorf","email":null},{"id":2,"text":"Sehr gutes Essen, bin erstaunt","restID":1,"visitRating":3.0,"publishDate":1704326400000,"name":"TestDavird q2341","email":"test@123.com"},{"id":3,"text":"Schlechte Currywurst","restID":2,"visitRating":1.0,"publishDate":1704844800000,"name":"Maximilian Meier","email":"test@gmail.com"},{"id":4,"text":"Sehr gute Fischsuppe, aber Schnitzel zu Standard","restID":1,"visitRating":4.0,"publishDate":1704153600000,"name":"Peter Meier","email":"test123@test.com"}])})
            }
        }

        const wrapper = mount(EintragList, {app})

        await wrapper.vm.$nextTick()

        const mockedEintrag = [{"id":1,"text":"War ganz gut, aber habe schon mal besser geegessen!","restID":0,"visitRating":0.0,"publishDate":null,"name":"Steffan Mahlsdorf","email":null},{"id":2,"text":"Sehr gutes Essen, bin erstaunt","restID":1,"visitRating":3.0,"publishDate":1704326400000,"name":"TestDavird q2341","email":"test@123.com"},{"id":3,"text":"Schlechte Currywurst","restID":2,"visitRating":1.0,"publishDate":1704844800000,"name":"Maximilian Meier","email":"test@gmail.com"},{"id":4,"text":"Sehr gute Fischsuppe, aber Schnitzel zu Standard","restID":1,"visitRating":4.0,"publishDate":1704153600000,"name":"Peter Meier","email":"test123@test.com"}]

        await wrapper.loadUpdate()

        expect(wrapper.vm.test.value).toEqual(mockedEintrag);
    });
});