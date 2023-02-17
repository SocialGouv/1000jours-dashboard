import { accompagnementEnumToString, dateFormattedToString, sortWidgetSourceByName } from '../utils/main.util';
import { Enum_Contacts_Personne_Accompagnee, WidgetEpdsSources } from './../__generated__/graphql';

describe("main.util", () => {
  describe("sortWidgetSourceByName", () => {
    it("should sort source by name", () => {
      const data: WidgetEpdsSources[] = [
        { id: "1", nom: "siteWeb", created_at: "", updated_at: "" },
        { id: "2", nom: "abcSite", created_at: "", updated_at: "" },
        { id: "3", nom: "monSite", created_at: "", updated_at: "" },
      ]
      const expected: WidgetEpdsSources[] = [
        { id: "2", nom: "abcSite", created_at: "", updated_at: "" },
        { id: "3", nom: "monSite", created_at: "", updated_at: "" },
        { id: "1", nom: "siteWeb", created_at: "", updated_at: "" },
      ]
      expect(sortWidgetSourceByName(data)).toEqual(expected);
    })
  })

  describe("dateFormattedToString", () => {
    it("should return date with dd/MM/yyyy format", () => {
      const result = dateFormattedToString(new Date("2023-12-03 10:34:23"))
      expect(result).toEqual("03/12/2023")
    })
  })

  describe("dateFormattedToString", () => {
    it("should return `Aidée` for enum Aidee", () => {
      const result = accompagnementEnumToString(Enum_Contacts_Personne_Accompagnee.Aidee)
      expect(result).toEqual("Aidée")
    })
    it("should return `Echange Initial` for enum EchangeInitial", () => {
      const result = accompagnementEnumToString(Enum_Contacts_Personne_Accompagnee.EchangeInitial)
      expect(result).toEqual("Echange initial")
    })
    it("should return `Non accompagné(e)` for enum NonAccompagnee", () => {
      const result = accompagnementEnumToString(Enum_Contacts_Personne_Accompagnee.NonAccompagnee)
      expect(result).toEqual("Non accompagné(e)")
    })
    it("should return `Orienté(e)` for enum Orientee", () => {
      const result = accompagnementEnumToString(Enum_Contacts_Personne_Accompagnee.Orientee)
      expect(result).toEqual("Orienté(e)")
    })
  })
})
