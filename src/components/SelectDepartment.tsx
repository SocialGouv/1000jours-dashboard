import React, { Fragment, useEffect, useState } from "react";

import { Select } from "@codegouvfr/react-dsfr/Select";
import GeoGouvApi from "../services/api/geogouv";
import { Departement } from "../../types/geogouv";

export const SelectDepartment = () => {
  const [departments, setDepartments] = useState<Departement[]>([])

  useEffect(() => {
    GeoGouvApi.getDepartments()
      .then((res) => {
        const list = res.data as Departement[]
        setDepartments(list)
      })
      .catch(e => console.warn(e))
  }, [])

  return <Select
    label="Département"
    nativeSelectProps={{}}
  >
    <Fragment key=".0">
      <option
        disabled
        hidden
        selected
        value=""
      >
        Sélectionnez une option
      </option>
      {departments.map((dep) => (
        <option key={dep.code} value="dep">{dep.code} - {dep.nom}</option>
      ))}
    </Fragment>
  </Select>
}
