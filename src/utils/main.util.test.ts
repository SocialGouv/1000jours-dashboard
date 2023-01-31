import { sortWidgetSourceByName } from './main.util';
import { WidgetEpdsSources } from './../__generated__/graphql';

describe("main.util", () => {
  describe("sortWidgetSourceByName", () => {
    it("should sort source by name", () => {
      const data: WidgetEpdsSources[] = [
        {id: "1", nom:"siteWeb", created_at:"", updated_at:""},
        {id: "2", nom:"abcSite", created_at:"", updated_at:""},
        {id: "3", nom:"monSite", created_at:"", updated_at:""},
      ]
      const expected: WidgetEpdsSources[] = [
        {id: "2", nom:"abcSite", created_at:"", updated_at:""},
        {id: "3", nom:"monSite", created_at:"", updated_at:""},
        {id: "1", nom:"siteWeb", created_at:"", updated_at:""},
      ]
      expect(sortWidgetSourceByName(data)).toEqual(expected);
    })
  })
})
