import React, { Fragment, useEffect, useState } from "react";

import { Select } from "@codegouvfr/react-dsfr/Select";
import GeoGouvApi from "../services/api/geogouv";
import { Departement } from "../../types/geogouv";

interface SelectDepartmentProps {
  setSelectedDepartment: (arg: Departement) => void
}

export const SelectDepartment = ({ setSelectedDepartment }: SelectDepartmentProps) => {
  const [departments, setDepartments] = useState<Departement[]>([])

  useEffect(() => {
    GeoGouvApi.getDepartments()
      .then((res) => {
        const list = res.data as Departement[]
        setDepartments(list)
      })
      .catch(e => console.warn(e))
  }, [])

  const handleChangeDepartment = (event: any) => {
    const departmentCode = event.target.value
    const selectedDepartment = departments.find(
      (item) => item.code === departmentCode
    )

    if (selectedDepartment) setSelectedDepartment(selectedDepartment)
  }

  return <Select
    label="Département"
    nativeSelectProps={{
      onChange: event => handleChangeDepartment(event),
    }}
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
        <option key={dep.code} value={dep.code}>{dep.code} - {dep.nom}</option>
      ))}
    </Fragment>
  </Select>
}
