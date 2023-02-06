import { Enum_Contacts_Personne_Accompagnee, WidgetEpdsSources } from "../__generated__/graphql"
import { format } from "date-fns";

export const sortWidgetSourceByName = (data: WidgetEpdsSources[]): WidgetEpdsSources[] => {
  const dataSorted: WidgetEpdsSources[] = [...data]
  dataSorted.sort((a, b) => a.nom < b.nom ? -1 : a.nom > b.nom ? 1 : 0)
  return dataSorted
}

export const dateFormattedToString = (date: Date): String => {
  return format(date, "dd/MM/yyyy")
}

export const accompagnementEnumToString = (value: Enum_Contacts_Personne_Accompagnee): string => {
  switch (value) {
    case Enum_Contacts_Personne_Accompagnee.Aidee:
      return "Aidée"
    case Enum_Contacts_Personne_Accompagnee.EchangeInitial:
      return "Echange initial"
    case Enum_Contacts_Personne_Accompagnee.NonAccompagnee:
      return "Non accompagné(e)"
    case Enum_Contacts_Personne_Accompagnee.Orientee:
      return "Orienté(e)"
    default:
      return ""
  }
}