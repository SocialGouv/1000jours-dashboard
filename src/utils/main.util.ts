import { WidgetEpdsSources } from "../__generated__/graphql"

export const sortWidgetSourceByName = (data: WidgetEpdsSources[]): WidgetEpdsSources[] => {
  const dataSorted: WidgetEpdsSources[] = [...data]
  dataSorted.sort((a, b) => a.nom < b.nom ? -1 : a.nom > b.nom ? 1 : 0)
  return dataSorted
}