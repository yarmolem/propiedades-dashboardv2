import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type CambiarContrasenaInput = {
  id?: Maybe<Scalars['ID']>;
  passwordNuevo?: Maybe<Scalars['String']>;
  passwordAntiguo?: Maybe<Scalars['String']>;
};

export type Categorias = {
  __typename?: 'Categorias';
  categoriaId?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
  nombreCategoria?: Maybe<Scalars['String']>;
  descripcionCategoria?: Maybe<Scalars['String']>;
  ImagenPrincipal?: Maybe<Imagenes>;
  ImagenSecundaria?: Maybe<Imagenes>;
  KeywordsCategoria?: Maybe<Scalars['String']>;
};

export type CategoriasInput = {
  categoriaId?: Maybe<Scalars['Int']>;
  nombreCategoria?: Maybe<Scalars['String']>;
  descripcionCategoria?: Maybe<Scalars['String']>;
  ImagenPrincipal?: Maybe<Scalars['Int']>;
  ImagenSecundaria?: Maybe<Scalars['Int']>;
  KeywordsCategoria?: Maybe<Scalars['String']>;
};




export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['Int']>;
};

export type DistritoInput = {
  DistCodi?: Maybe<Scalars['ID']>;
  destacado?: Maybe<Scalars['Int']>;
};

export type GetPlanos = {
  __typename?: 'GetPlanos';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Planos>>;
};

export type GetPropiedades = {
  __typename?: 'GetPropiedades';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Propiedades>>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  id?: Maybe<Scalars['ID']>;
  descripcion?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  id?: Maybe<Scalars['ID']>;
  descripcion?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CrearPlanos?: Maybe<Planos>;
  UpdatePlanos?: Maybe<Planos>;
  DeletePlanos?: Maybe<Scalars['String']>;
  CrearPropiedades?: Maybe<Propiedades>;
  UpdatePropiedades?: Maybe<Propiedades>;
  DeletePropiedades?: Maybe<Scalars['String']>;
  CrearCategorias?: Maybe<Categorias>;
  UpdateCategorias?: Maybe<Categorias>;
  DeleteCategorias?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  login?: Maybe<User>;
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearUsuario?: Maybe<User>;
  UpdateUsuario?: Maybe<User>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  UpdateDistrito?: Maybe<Distrito>;
  DeleteImage?: Maybe<Scalars['String']>;
  UpdateImage?: Maybe<Imagenes>;
  CreateImage?: Maybe<Imagenes>;
};


export type MutationCrearPlanosArgs = {
  input: PlanosInput;
};


export type MutationUpdatePlanosArgs = {
  input?: Maybe<PlanosInput>;
};


export type MutationDeletePlanosArgs = {
  input: PlanosInput;
};


export type MutationCrearPropiedadesArgs = {
  input: PropiedadesInput;
};


export type MutationUpdatePropiedadesArgs = {
  input?: Maybe<PropiedadesInput>;
};


export type MutationDeletePropiedadesArgs = {
  input: PropiedadesInput;
};


export type MutationCrearCategoriasArgs = {
  input: CategoriasInput;
};


export type MutationUpdateCategoriasArgs = {
  input?: Maybe<CategoriasInput>;
};


export type MutationDeleteCategoriasArgs = {
  input: CategoriasInput;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationDeleteUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationUpdateDistritoArgs = {
  input?: Maybe<DistritoInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationUpdateImageArgs = {
  input?: Maybe<ImagenesInput>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: Maybe<ImagenesInput>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Planos = {
  __typename?: 'Planos';
  planoId?: Maybe<Scalars['Int']>;
  tituloPlano?: Maybe<Scalars['String']>;
  descripcionCortaPlano?: Maybe<Scalars['String']>;
  descripcionLargaPlano?: Maybe<Scalars['String']>;
  foto?: Maybe<Imagenes>;
  Propiedades?: Maybe<Propiedades>;
};

export type PlanosInput = {
  planoId?: Maybe<Scalars['Int']>;
  tituloPlano?: Maybe<Scalars['String']>;
  descripcionCortaPlano?: Maybe<Scalars['String']>;
  descripcionLargaPlano?: Maybe<Scalars['String']>;
  foto?: Maybe<Scalars['Int']>;
  propiedadId?: Maybe<Scalars['Int']>;
};

export type Propiedades = {
  __typename?: 'Propiedades';
  propiedadId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tipoContrato?: Maybe<Scalars['Int']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionCompleta?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  fotoPrincipal?: Maybe<Imagenes>;
  fotoSecundaria?: Maybe<Imagenes>;
  galeria?: Maybe<Array<Imagenes>>;
  lat?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  cuartos?: Maybe<Scalars['Int']>;
  banios?: Maybe<Scalars['Int']>;
  pisos?: Maybe<Scalars['Int']>;
  dimensiones?: Maybe<Scalars['String']>;
  antiguedad?: Maybe<Scalars['Int']>;
  areaConstruida?: Maybe<Scalars['String']>;
  ambientes?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  Departamento?: Maybe<Departamento>;
  Provincia?: Maybe<Provincia>;
  Distrito?: Maybe<Distrito>;
  Categorias?: Maybe<Categorias>;
  Asesor?: Maybe<User>;
  Planos?: Maybe<Planos>;
};

export type PropiedadesInput = {
  propiedadId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tipoContrato?: Maybe<Scalars['Int']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionCompleta?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  fotoPrincipal?: Maybe<Scalars['Int']>;
  fotoSecundaria?: Maybe<Scalars['Int']>;
  galeria?: Maybe<Array<Scalars['Int']>>;
  lat?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  cuartos?: Maybe<Scalars['Int']>;
  banios?: Maybe<Scalars['Int']>;
  pisos?: Maybe<Scalars['Int']>;
  dimensiones?: Maybe<Scalars['String']>;
  antiguedad?: Maybe<Scalars['Int']>;
  areaConstruida?: Maybe<Scalars['String']>;
  ambientes?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  categoriaId?: Maybe<Scalars['Int']>;
  asesorId?: Maybe<Scalars['Int']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetDepartamentos?: Maybe<Array<Departamento>>;
  GetProvincias?: Maybe<Array<Provincia>>;
  GetDistritos?: Maybe<Array<Distrito>>;
  GetAllUsers?: Maybe<Array<User>>;
  GetCategoria?: Maybe<Array<Maybe<Categorias>>>;
  GetCategoriaSlug?: Maybe<Categorias>;
  GetAllPlanos?: Maybe<GetPlanos>;
  GetIdPlanos?: Maybe<Planos>;
  GetAllPropiedades?: Maybe<GetPropiedades>;
  GetAsesorPropiedades?: Maybe<GetPropiedades>;
  GetIdPropiedades?: Maybe<Propiedades>;
};


export type QueryGetProvinciasArgs = {
  DepCode?: Maybe<Scalars['String']>;
};


export type QueryGetDistritosArgs = {
  ProCode?: Maybe<Scalars['String']>;
};


export type QueryGetAllUsersArgs = {
  tipoUsuario?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaSlugArgs = {
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetAllPlanosArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetIdPlanosArgs = {
  planoId?: Maybe<Scalars['Int']>;
};


export type QueryGetAllPropiedadesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
};


export type QueryGetAsesorPropiedadesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetIdPropiedadesArgs = {
  slug?: Maybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}


export type User = {
  __typename?: 'User';
  userId?: Maybe<Scalars['ID']>;
  alias?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['Int']>;
  nroDocumento?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  foto?: Maybe<Imagenes>;
  estado?: Maybe<Scalars['Int']>;
  apiToken?: Maybe<Scalars['String']>;
  Departamento?: Maybe<Departamento>;
  Provincia?: Maybe<Provincia>;
  Distrito?: Maybe<Distrito>;
};

export type UserInput = {
  userId?: Maybe<Scalars['ID']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  alias?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['Int']>;
  nroDocumento?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  foto?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['Int']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'alias' | 'email' | 'userId' | 'nombres' | 'apellidos' | 'tipoUsuario' | 'nroDocumento' | 'tipoDocumento' | 'fechaNacimiento' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type RegistroMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegistroMutation = (
  { __typename?: 'Mutation' }
  & { registro?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'alias' | 'email' | 'userId' | 'nombres' | 'apellidos' | 'tipoUsuario' | 'nroDocumento' | 'tipoDocumento' | 'fechaNacimiento' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparNom' | 'DeparCodi'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvNom' | 'ProvCodi' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistNom' | 'DistCodi' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type CrearCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type CrearCategoriasMutation = (
  { __typename?: 'Mutation' }
  & { CrearCategorias?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'nombreCategoria' | 'slugCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type DeleteCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type DeleteCategoriasMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteCategorias'>
);

export type UpdateCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type UpdateCategoriasMutation = (
  { __typename?: 'Mutation' }
  & { UpdateCategorias?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'nombreCategoria' | 'slugCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type CreateImageMutationVariables = Exact<{
  input?: Maybe<ImagenesInput>;
  imagen: Scalars['Upload'];
}>;


export type CreateImageMutation = (
  { __typename?: 'Mutation' }
  & { CreateImage?: Maybe<(
    { __typename?: 'Imagenes' }
    & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
  )> }
);

export type GetCategoriaSlugQueryVariables = Exact<{
  slugCategoria?: Maybe<Scalars['String']>;
}>;


export type GetCategoriaSlugQuery = (
  { __typename?: 'Query' }
  & { GetCategoriaSlug?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type GetImagenesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagenesQuery = (
  { __typename?: 'Query' }
  & { GetImagenes?: Maybe<Array<(
    { __typename?: 'Imagenes' }
    & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
  )>> }
);


export const LoginDocument = gql`
    mutation login($input: loginInput!) {
  login(input: $input) {
    alias
    email
    userId
    nombres
    apellidos
    tipoUsuario
    nroDocumento
    tipoDocumento
    fechaNacimiento
    foto {
      id
      url
      descripcion
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegistroDocument = gql`
    mutation registro($input: UserInput!) {
  registro: CrearUsuario(input: $input) {
    alias
    email
    userId
    nombres
    apellidos
    tipoUsuario
    nroDocumento
    tipoDocumento
    fechaNacimiento
    foto {
      id
      url
      descripcion
    }
    estado
    apiToken
    Departamento {
      DeparNom
      DeparCodi
    }
    Provincia {
      ProvNom
      ProvCodi
      DeparCodi
    }
    Distrito {
      DistNom
      DistCodi
      ProvCodi
      destacado
    }
  }
}
    `;
export type RegistroMutationFn = Apollo.MutationFunction<RegistroMutation, RegistroMutationVariables>;

/**
 * __useRegistroMutation__
 *
 * To run a mutation, you first call `useRegistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registroMutation, { data, loading, error }] = useRegistroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegistroMutation(baseOptions?: Apollo.MutationHookOptions<RegistroMutation, RegistroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistroMutation, RegistroMutationVariables>(RegistroDocument, options);
      }
export type RegistroMutationHookResult = ReturnType<typeof useRegistroMutation>;
export type RegistroMutationResult = Apollo.MutationResult<RegistroMutation>;
export type RegistroMutationOptions = Apollo.BaseMutationOptions<RegistroMutation, RegistroMutationVariables>;
export const CrearCategoriasDocument = gql`
    mutation CrearCategorias($input: CategoriasInput!) {
  CrearCategorias(input: $input) {
    categoriaId
    nombreCategoria
    slugCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;
export type CrearCategoriasMutationFn = Apollo.MutationFunction<CrearCategoriasMutation, CrearCategoriasMutationVariables>;

/**
 * __useCrearCategoriasMutation__
 *
 * To run a mutation, you first call `useCrearCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearCategoriasMutation, { data, loading, error }] = useCrearCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<CrearCategoriasMutation, CrearCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearCategoriasMutation, CrearCategoriasMutationVariables>(CrearCategoriasDocument, options);
      }
export type CrearCategoriasMutationHookResult = ReturnType<typeof useCrearCategoriasMutation>;
export type CrearCategoriasMutationResult = Apollo.MutationResult<CrearCategoriasMutation>;
export type CrearCategoriasMutationOptions = Apollo.BaseMutationOptions<CrearCategoriasMutation, CrearCategoriasMutationVariables>;
export const DeleteCategoriasDocument = gql`
    mutation DeleteCategorias($input: CategoriasInput!) {
  DeleteCategorias(input: $input)
}
    `;
export type DeleteCategoriasMutationFn = Apollo.MutationFunction<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>;

/**
 * __useDeleteCategoriasMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriasMutation, { data, loading, error }] = useDeleteCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>(DeleteCategoriasDocument, options);
      }
export type DeleteCategoriasMutationHookResult = ReturnType<typeof useDeleteCategoriasMutation>;
export type DeleteCategoriasMutationResult = Apollo.MutationResult<DeleteCategoriasMutation>;
export type DeleteCategoriasMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>;
export const UpdateCategoriasDocument = gql`
    mutation UpdateCategorias($input: CategoriasInput!) {
  UpdateCategorias(input: $input) {
    categoriaId
    nombreCategoria
    slugCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;
export type UpdateCategoriasMutationFn = Apollo.MutationFunction<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>;

/**
 * __useUpdateCategoriasMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriasMutation, { data, loading, error }] = useUpdateCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>(UpdateCategoriasDocument, options);
      }
export type UpdateCategoriasMutationHookResult = ReturnType<typeof useUpdateCategoriasMutation>;
export type UpdateCategoriasMutationResult = Apollo.MutationResult<UpdateCategoriasMutation>;
export type UpdateCategoriasMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>;
export const CreateImageDocument = gql`
    mutation CreateImage($input: ImagenesInput, $imagen: Upload!) {
  CreateImage(input: $input, imagen: $imagen) {
    id
    url
    descripcion
  }
}
    `;
export type CreateImageMutationFn = Apollo.MutationFunction<CreateImageMutation, CreateImageMutationVariables>;

/**
 * __useCreateImageMutation__
 *
 * To run a mutation, you first call `useCreateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageMutation, { data, loading, error }] = useCreateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateImageMutation, CreateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImageMutation, CreateImageMutationVariables>(CreateImageDocument, options);
      }
export type CreateImageMutationHookResult = ReturnType<typeof useCreateImageMutation>;
export type CreateImageMutationResult = Apollo.MutationResult<CreateImageMutation>;
export type CreateImageMutationOptions = Apollo.BaseMutationOptions<CreateImageMutation, CreateImageMutationVariables>;
export const GetCategoriaSlugDocument = gql`
    query GetCategoriaSlug($slugCategoria: String) {
  GetCategoriaSlug(slugCategoria: $slugCategoria) {
    categoriaId
    slugCategoria
    nombreCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;

/**
 * __useGetCategoriaSlugQuery__
 *
 * To run a query within a React component, call `useGetCategoriaSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaSlugQuery({
 *   variables: {
 *      slugCategoria: // value for 'slugCategoria'
 *   },
 * });
 */
export function useGetCategoriaSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>(GetCategoriaSlugDocument, options);
      }
export function useGetCategoriaSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>(GetCategoriaSlugDocument, options);
        }
export type GetCategoriaSlugQueryHookResult = ReturnType<typeof useGetCategoriaSlugQuery>;
export type GetCategoriaSlugLazyQueryHookResult = ReturnType<typeof useGetCategoriaSlugLazyQuery>;
export type GetCategoriaSlugQueryResult = Apollo.QueryResult<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>;
export const GetImagenesDocument = gql`
    query GetImagenes {
  GetImagenes {
    id
    url
    descripcion
  }
}
    `;

/**
 * __useGetImagenesQuery__
 *
 * To run a query within a React component, call `useGetImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
      }
export function useGetImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
        }
export type GetImagenesQueryHookResult = ReturnType<typeof useGetImagenesQuery>;
export type GetImagenesLazyQueryHookResult = ReturnType<typeof useGetImagenesLazyQuery>;
export type GetImagenesQueryResult = Apollo.QueryResult<GetImagenesQuery, GetImagenesQueryVariables>;