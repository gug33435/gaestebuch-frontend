import { describe, it, expect} from 'vitest'

import { mount } from '@vue/test-utils';
import { createApp } from 'vue';
import EintragList from '@/components/EintragList.vue';
import { useOktaAuth } from '@okta/okta-vue';
import axios from 'axios';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('EintragList.vue', () => {
    it('fetches data and renders it correctly', async () => {
        // Mock the Axios request
        const axiosStub = sinon.stub(axios, 'get');
        const responseData = [
            {id: 5, text: 'Nicht sehr überzeugt', restID: 2, visitRating: 1.0, publishDate: 1704409200000, name: 'Max Sultan', email: 'sultan@123.com'},
            {id: 7, text: 'Super Essen, toll!', restID: 2, visitRating: 5.0, publishDate: 1704409200000, name: 'Peter Honig', email: 'honig@123.com'},
            {id: 3, text: 'Wirkte wie TK, aber Kellner nett', restID: 2, visitRating: 3.0, publishDate: 1704409200000, name: 'Sabine Müller', email: 'sabine@123.com'}
        ]
        axiosStub.resolves({ data: responseData });

        const oktaAuthMock = {
            authState: { isAuthenticated: true, idToken: 'mockedToken' },
            handleAuthentication: sinon.stub(),
            loginRedirect: sinon.stub(),
            logout: sinon.stub(),
        };

        // Mount the component
        const app = createApp({});
        app.config.globalProperties.$oktaAuth = oktaAuthMock;
        app.config.globalProperties.$axios = axios; // Mock axios in the global Vue instance
        const wrapper = mount(EintragList, {
            global: {
                plugins: [useOktaAuth]
            },
        });

        // Wait for the component to fetch data
        await wrapper.vm.$nextTick();

        // Assert that the data is rendered correctly
        expect(wrapper.text()).to.include('Super Essen, toll!');
        // You may need more specific assertions based on your actual component structure and data rendering

        // Restore the Axios stub
        axiosStub.restore();
    });
});