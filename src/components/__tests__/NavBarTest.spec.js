import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

global.fetch = async () => ({
    json: async () => ({current: {temp_c: 28, condition: {icon: 'cloudy'}}})
})

describe('YourComponent Tests', () => {
    it('should navigate to home on clicking home link', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{path: '/', component: NavBar}],
        })

        const wrapper = mount(NavBar, {
            global: {
                plugins: [router],
            }
        })

        // Trigger the home link click event
        await wrapper.find('a[href="/"]').trigger('click')

        // Assert that the router has navigated to the home page
        expect(router.currentRoute.value.path).toBe('/')
    })

    /* it('should load correct weather data on selecting restaurant from dropdown', async () => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            loginWithRedirect: vi.fn(),
            logout: vi.fn()
        })

        const router = createRouter({
            history: createWebHistory(),
            routes: [{ path: '/rest2', component: NavBar }]
        })

        const app = {
            use: (plugin) => {
                NavBar.setup({attrs: { $router: router}})
            },
            provide: {
                $fetch: async () => ({json: async() => ({current: {temp_c: 28, condition: {icon: 'cloudy'}}})})
            }
        }

        const wrapper = mount(NavBar, {app})

        // Trigger the dropdown click event and select a restaurant
        const dropDownToggle = await wrapper.find('.dropdown-toggle')
        await dropDownToggle.trigger('click')

        await wrapper.vm.$nextTick()
        //await wrapper.find('.dropdown-toggle').trigger('click');
        const dropDownItem = wrapper.findAll('.dropdown-item')
        const dropItem = dropDownItem[1]
        await dropItem.trigger('click')
        //await wrapper.find('.dropdown-item:nth-child(2)').trigger('click'); // Assuming the second restaurant is selected

        // Mocked weather data response
        const mockedWeatherData = { current: { temp_c: 28, condition: { icon: 'cloudy' } } }

        await wrapper.vm.$nextTick()

        // Trigger the loadWeather function
        await wrapper.vm.loadWeather();

        // Assert that the weather data is loaded correctly
        expect(wrapper.vm.weatherData).toEqual(mockedWeatherData);
    }) */
})