import { describe, it, expect, vi} from 'vitest'

import EintragList from "../EintragList.vue";
import { shallowMount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

describe('EintragList', () => {
  const dreiAntworten = [
    {id: 5, text: 'Nicht sehr überzeugt', restID: 2, visitRating: 1.0, publishDate: 1704409200000, name: 'Max Sultan', email: 'sultan@123.com'},
    {id: 7, text: 'Super Essen, toll!', restID: 2, visitRating: 5.0, publishDate: 1704409200000, name: 'Peter Honig', email: 'honig@123.com'},
    {id: 3, text: 'Wirkte wie TK, aber Kellner nett', restID: 2, visitRating: 3.0, publishDate: 1704409200000, name: 'Sabine Müller', email: 'sabine@123.com'}
  ]

  vi.mock('axios')

  it('die Antwort aus dem Backend sollte angezeigt werden', async () => {
    vi.mocked(axios, true).get.mockResolvedValueOnce({ data: dreiAntworten})

    const eintrag = dreiAntworten[0].email
    const wrapper = shallowMount(EintragList)

    await flushPromises()

    expect(wrapper.text()).toContain(eintrag)
  })
})