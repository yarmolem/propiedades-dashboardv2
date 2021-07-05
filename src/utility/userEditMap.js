export const userEditMap = (user) => {
  const {
    foto,
    apiToken,
    Distrito,
    Provincia,
    Departamento,
    tipoDocumento,
    ...rest
  } = user
  return {
    ...rest,
    foto: foto.id,
    tipoUsuario: {
      value: user.tipoUsuario,
      label: user.tipoUsuario === 1 ? 'Administrador' : 'Asesor'
    },
    Documento: {
      value: user.tipoDocumento,
      label:
        /* eslint-disable */
        user.tipoDocumento === 0
          ? 'DNI'
          : user.tipoDocumento === 1
          ? 'Pasaporte'
          : 'Carnet de extranjeria'
      /* eslint-enable */
    },
    Prov: {
      value: user.Provincia.ProvCodi,
      label: user.Provincia.ProvNom
    },
    Dist: {
      value: user.Distrito.DistCodi,
      label: user.Distrito.DistNom
    },
    Depar: {
      value: user.Departamento.DeparCodi,
      label: user.Departamento.DeparNom
    }
  }
}
