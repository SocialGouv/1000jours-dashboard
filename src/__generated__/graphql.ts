/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Article = {
  __typename?: 'Article';
  cartographie_pois_types?: Maybe<Array<Maybe<CartographieTypes>>>;
  created_at: Scalars['DateTime'];
  enbref_1_icone?: Maybe<Enum_Article_Enbref_1_Icone>;
  enbref_1_texte?: Maybe<Scalars['String']>;
  enbref_2_icone?: Maybe<Enum_Article_Enbref_2_Icone>;
  enbref_2_texte?: Maybe<Scalars['String']>;
  enbref_3_icone?: Maybe<Enum_Article_Enbref_3_Icone>;
  enbref_3_texte?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  id: Scalars['ID'];
  le_saviez_vous?: Maybe<Scalars['String']>;
  lien_1_titre?: Maybe<Scalars['String']>;
  lien_1_url?: Maybe<Scalars['String']>;
  lien_2_titre?: Maybe<Scalars['String']>;
  lien_2_url?: Maybe<Scalars['String']>;
  lien_3_titre?: Maybe<Scalars['String']>;
  lien_3_url?: Maybe<Scalars['String']>;
  lien_4_titre?: Maybe<Scalars['String']>;
  lien_4_url?: Maybe<Scalars['String']>;
  mots_cles?: Maybe<Scalars['String']>;
  notifications?: Maybe<Scalars['Boolean']>;
  ordre?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  resume: Scalars['String'];
  texte_1?: Maybe<Scalars['String']>;
  texte_1_titre?: Maybe<Scalars['String']>;
  texte_2?: Maybe<Scalars['String']>;
  texte_2_titre?: Maybe<Scalars['String']>;
  thematiques?: Maybe<Array<Maybe<Thematique>>>;
  titre: Scalars['String'];
  updated_at: Scalars['DateTime'];
  visuel?: Maybe<UploadFile>;
};


export type ArticleCartographie_Pois_TypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ArticleEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ArticleEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ArticleThematiquesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  avg?: Maybe<ArticleAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ArticleAggregatorMax>;
  min?: Maybe<ArticleAggregatorMin>;
  sum?: Maybe<ArticleAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleAggregatorAvg = {
  __typename?: 'ArticleAggregatorAvg';
  ordre?: Maybe<Scalars['Float']>;
};

export type ArticleAggregatorMax = {
  __typename?: 'ArticleAggregatorMax';
  ordre?: Maybe<Scalars['Float']>;
};

export type ArticleAggregatorMin = {
  __typename?: 'ArticleAggregatorMin';
  ordre?: Maybe<Scalars['Float']>;
};

export type ArticleAggregatorSum = {
  __typename?: 'ArticleAggregatorSum';
  ordre?: Maybe<Scalars['Float']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionEnbref_1_Icone = {
  __typename?: 'ArticleConnectionEnbref_1_icone';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionEnbref_1_Texte = {
  __typename?: 'ArticleConnectionEnbref_1_texte';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionEnbref_2_Icone = {
  __typename?: 'ArticleConnectionEnbref_2_icone';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionEnbref_2_Texte = {
  __typename?: 'ArticleConnectionEnbref_2_texte';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionEnbref_3_Icone = {
  __typename?: 'ArticleConnectionEnbref_3_icone';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionEnbref_3_Texte = {
  __typename?: 'ArticleConnectionEnbref_3_texte';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionLe_Saviez_Vous = {
  __typename?: 'ArticleConnectionLe_saviez_vous';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_1_Titre = {
  __typename?: 'ArticleConnectionLien_1_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_1_Url = {
  __typename?: 'ArticleConnectionLien_1_url';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_2_Titre = {
  __typename?: 'ArticleConnectionLien_2_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_2_Url = {
  __typename?: 'ArticleConnectionLien_2_url';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_3_Titre = {
  __typename?: 'ArticleConnectionLien_3_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_3_Url = {
  __typename?: 'ArticleConnectionLien_3_url';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_4_Titre = {
  __typename?: 'ArticleConnectionLien_4_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionLien_4_Url = {
  __typename?: 'ArticleConnectionLien_4_url';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionMots_Cles = {
  __typename?: 'ArticleConnectionMots_cles';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionNotifications = {
  __typename?: 'ArticleConnectionNotifications';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ArticleConnectionOrdre = {
  __typename?: 'ArticleConnectionOrdre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ArticleConnectionPublished_At = {
  __typename?: 'ArticleConnectionPublished_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionResume = {
  __typename?: 'ArticleConnectionResume';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTexte_1 = {
  __typename?: 'ArticleConnectionTexte_1';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTexte_1_Titre = {
  __typename?: 'ArticleConnectionTexte_1_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTexte_2 = {
  __typename?: 'ArticleConnectionTexte_2';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTexte_2_Titre = {
  __typename?: 'ArticleConnectionTexte_2_titre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitre = {
  __typename?: 'ArticleConnectionTitre';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionVisuel = {
  __typename?: 'ArticleConnectionVisuel';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  enbref_1_icone?: Maybe<Array<Maybe<ArticleConnectionEnbref_1_Icone>>>;
  enbref_1_texte?: Maybe<Array<Maybe<ArticleConnectionEnbref_1_Texte>>>;
  enbref_2_icone?: Maybe<Array<Maybe<ArticleConnectionEnbref_2_Icone>>>;
  enbref_2_texte?: Maybe<Array<Maybe<ArticleConnectionEnbref_2_Texte>>>;
  enbref_3_icone?: Maybe<Array<Maybe<ArticleConnectionEnbref_3_Icone>>>;
  enbref_3_texte?: Maybe<Array<Maybe<ArticleConnectionEnbref_3_Texte>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  le_saviez_vous?: Maybe<Array<Maybe<ArticleConnectionLe_Saviez_Vous>>>;
  lien_1_titre?: Maybe<Array<Maybe<ArticleConnectionLien_1_Titre>>>;
  lien_1_url?: Maybe<Array<Maybe<ArticleConnectionLien_1_Url>>>;
  lien_2_titre?: Maybe<Array<Maybe<ArticleConnectionLien_2_Titre>>>;
  lien_2_url?: Maybe<Array<Maybe<ArticleConnectionLien_2_Url>>>;
  lien_3_titre?: Maybe<Array<Maybe<ArticleConnectionLien_3_Titre>>>;
  lien_3_url?: Maybe<Array<Maybe<ArticleConnectionLien_3_Url>>>;
  lien_4_titre?: Maybe<Array<Maybe<ArticleConnectionLien_4_Titre>>>;
  lien_4_url?: Maybe<Array<Maybe<ArticleConnectionLien_4_Url>>>;
  mots_cles?: Maybe<Array<Maybe<ArticleConnectionMots_Cles>>>;
  notifications?: Maybe<Array<Maybe<ArticleConnectionNotifications>>>;
  ordre?: Maybe<Array<Maybe<ArticleConnectionOrdre>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_At>>>;
  resume?: Maybe<Array<Maybe<ArticleConnectionResume>>>;
  texte_1?: Maybe<Array<Maybe<ArticleConnectionTexte_1>>>;
  texte_1_titre?: Maybe<Array<Maybe<ArticleConnectionTexte_1_Titre>>>;
  texte_2?: Maybe<Array<Maybe<ArticleConnectionTexte_2>>>;
  texte_2_titre?: Maybe<Array<Maybe<ArticleConnectionTexte_2_Titre>>>;
  titre?: Maybe<Array<Maybe<ArticleConnectionTitre>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
  visuel?: Maybe<Array<Maybe<ArticleConnectionVisuel>>>;
};

export type ArticleInput = {
  cartographie_pois_types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  enbref_1_icone?: InputMaybe<Enum_Article_Enbref_1_Icone>;
  enbref_1_texte?: InputMaybe<Scalars['String']>;
  enbref_2_icone?: InputMaybe<Enum_Article_Enbref_2_Icone>;
  enbref_2_texte?: InputMaybe<Scalars['String']>;
  enbref_3_icone?: InputMaybe<Enum_Article_Enbref_3_Icone>;
  enbref_3_texte?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le_saviez_vous?: InputMaybe<Scalars['String']>;
  lien_1_titre?: InputMaybe<Scalars['String']>;
  lien_1_url?: InputMaybe<Scalars['String']>;
  lien_2_titre?: InputMaybe<Scalars['String']>;
  lien_2_url?: InputMaybe<Scalars['String']>;
  lien_3_titre?: InputMaybe<Scalars['String']>;
  lien_3_url?: InputMaybe<Scalars['String']>;
  lien_4_titre?: InputMaybe<Scalars['String']>;
  lien_4_url?: InputMaybe<Scalars['String']>;
  mots_cles?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['Boolean']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resume: Scalars['String'];
  texte_1?: InputMaybe<Scalars['String']>;
  texte_1_titre?: InputMaybe<Scalars['String']>;
  texte_2?: InputMaybe<Scalars['String']>;
  texte_2_titre?: InputMaybe<Scalars['String']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  titre: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  visuel?: InputMaybe<Scalars['ID']>;
};

export type CartographieDsTypeInput = {
  cartographie_pois_type?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<ComponentCartographieTypeInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CartographieDsTypes = {
  __typename?: 'CartographieDsTypes';
  cartographie_pois_type?: Maybe<CartographieTypes>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<ComponentCartographieTypes>>>;
  updated_at: Scalars['DateTime'];
};

export type CartographieDsTypesAggregator = {
  __typename?: 'CartographieDsTypesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CartographieDsTypesConnection = {
  __typename?: 'CartographieDsTypesConnection';
  aggregate?: Maybe<CartographieDsTypesAggregator>;
  groupBy?: Maybe<CartographieDsTypesGroupBy>;
  values?: Maybe<Array<Maybe<CartographieDsTypes>>>;
};

export type CartographieDsTypesConnectionCartographie_Pois_Type = {
  __typename?: 'CartographieDsTypesConnectionCartographie_pois_type';
  connection?: Maybe<CartographieDsTypesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieDsTypesConnectionCreated_At = {
  __typename?: 'CartographieDsTypesConnectionCreated_at';
  connection?: Maybe<CartographieDsTypesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieDsTypesConnectionId = {
  __typename?: 'CartographieDsTypesConnectionId';
  connection?: Maybe<CartographieDsTypesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieDsTypesConnectionIdentifiant = {
  __typename?: 'CartographieDsTypesConnectionIdentifiant';
  connection?: Maybe<CartographieDsTypesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieDsTypesConnectionUpdated_At = {
  __typename?: 'CartographieDsTypesConnectionUpdated_at';
  connection?: Maybe<CartographieDsTypesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieDsTypesGroupBy = {
  __typename?: 'CartographieDsTypesGroupBy';
  cartographie_pois_type?: Maybe<Array<Maybe<CartographieDsTypesConnectionCartographie_Pois_Type>>>;
  created_at?: Maybe<Array<Maybe<CartographieDsTypesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CartographieDsTypesConnectionId>>>;
  identifiant?: Maybe<Array<Maybe<CartographieDsTypesConnectionIdentifiant>>>;
  updated_at?: Maybe<Array<Maybe<CartographieDsTypesConnectionUpdated_At>>>;
};

/** Points d'intérêt */
export type CartographiePoi = {
  __typename?: 'CartographiePoi';
  cartographie_adresses?: Maybe<Array<Maybe<ComponentCartographieAdresse>>>;
  cartographie_adresses_json?: Maybe<Scalars['JSON']>;
  cartographie_references_json?: Maybe<Scalars['JSON']>;
  courriel?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  nom: Scalars['String'];
  references?: Maybe<Array<Maybe<ComponentCartographieSourceReference>>>;
  site_internet?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  type?: Maybe<CartographieTypes>;
  updated_at: Scalars['DateTime'];
};

export type CartographiePoiAdresse = {
  __typename?: 'CartographiePoiAdresse';
  adresse?: Maybe<Scalars['String']>;
  categorie?: Maybe<Scalars['String']>;
  code_postal?: Maybe<Scalars['String']>;
  commune?: Maybe<Scalars['String']>;
  courriel?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
  position_latitude?: Maybe<Scalars['Float']>;
  position_longitude?: Maybe<Scalars['Float']>;
  site_internet?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CartographiePoiAggregator = {
  __typename?: 'CartographiePoiAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CartographiePoiConnection = {
  __typename?: 'CartographiePoiConnection';
  aggregate?: Maybe<CartographiePoiAggregator>;
  groupBy?: Maybe<CartographiePoiGroupBy>;
  values?: Maybe<Array<Maybe<CartographiePoi>>>;
};

export type CartographiePoiConnectionCartographie_Adresses_Json = {
  __typename?: 'CartographiePoiConnectionCartographie_adresses_json';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type CartographiePoiConnectionCartographie_References_Json = {
  __typename?: 'CartographiePoiConnectionCartographie_references_json';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type CartographiePoiConnectionCourriel = {
  __typename?: 'CartographiePoiConnectionCourriel';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographiePoiConnectionCreated_At = {
  __typename?: 'CartographiePoiConnectionCreated_at';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographiePoiConnectionId = {
  __typename?: 'CartographiePoiConnectionId';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographiePoiConnectionIdentifiant = {
  __typename?: 'CartographiePoiConnectionIdentifiant';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographiePoiConnectionNom = {
  __typename?: 'CartographiePoiConnectionNom';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographiePoiConnectionSite_Internet = {
  __typename?: 'CartographiePoiConnectionSite_internet';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographiePoiConnectionTelephone = {
  __typename?: 'CartographiePoiConnectionTelephone';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographiePoiConnectionType = {
  __typename?: 'CartographiePoiConnectionType';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographiePoiConnectionUpdated_At = {
  __typename?: 'CartographiePoiConnectionUpdated_at';
  connection?: Maybe<CartographiePoiConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographiePoiGroupBy = {
  __typename?: 'CartographiePoiGroupBy';
  cartographie_adresses_json?: Maybe<Array<Maybe<CartographiePoiConnectionCartographie_Adresses_Json>>>;
  cartographie_references_json?: Maybe<Array<Maybe<CartographiePoiConnectionCartographie_References_Json>>>;
  courriel?: Maybe<Array<Maybe<CartographiePoiConnectionCourriel>>>;
  created_at?: Maybe<Array<Maybe<CartographiePoiConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CartographiePoiConnectionId>>>;
  identifiant?: Maybe<Array<Maybe<CartographiePoiConnectionIdentifiant>>>;
  nom?: Maybe<Array<Maybe<CartographiePoiConnectionNom>>>;
  site_internet?: Maybe<Array<Maybe<CartographiePoiConnectionSite_Internet>>>;
  telephone?: Maybe<Array<Maybe<CartographiePoiConnectionTelephone>>>;
  type?: Maybe<Array<Maybe<CartographiePoiConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<CartographiePoiConnectionUpdated_At>>>;
};

export type CartographiePoiInput = {
  cartographie_adresses?: InputMaybe<Array<InputMaybe<ComponentCartographieAdresseInput>>>;
  cartographie_adresses_json?: InputMaybe<Scalars['JSON']>;
  cartographie_references_json?: InputMaybe<Scalars['JSON']>;
  courriel?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  nom: Scalars['String'];
  references?: InputMaybe<Array<InputMaybe<ComponentCartographieSourceReferenceInput>>>;
  site_internet?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CartographieSource = {
  __typename?: 'CartographieSource';
  champs?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  fichier?: Maybe<UploadFile>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  lignes_insertion?: Maybe<Scalars['Int']>;
  lignes_total?: Maybe<Scalars['Int']>;
  nom?: Maybe<Scalars['String']>;
  pret_a_traiter?: Maybe<Scalars['Boolean']>;
  regles?: Maybe<ComponentCartographieReglesChamps>;
  regles_script?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  traitement?: Maybe<Enum_Cartographiesource_Traitement>;
  type: Enum_Cartographiesource_Type;
  updated_at: Scalars['DateTime'];
  version?: Maybe<Scalars['Float']>;
};

export type CartographieSourceAggregator = {
  __typename?: 'CartographieSourceAggregator';
  avg?: Maybe<CartographieSourceAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CartographieSourceAggregatorMax>;
  min?: Maybe<CartographieSourceAggregatorMin>;
  sum?: Maybe<CartographieSourceAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CartographieSourceAggregatorAvg = {
  __typename?: 'CartographieSourceAggregatorAvg';
  lignes_insertion?: Maybe<Scalars['Float']>;
  lignes_total?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type CartographieSourceAggregatorMax = {
  __typename?: 'CartographieSourceAggregatorMax';
  lignes_insertion?: Maybe<Scalars['Float']>;
  lignes_total?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type CartographieSourceAggregatorMin = {
  __typename?: 'CartographieSourceAggregatorMin';
  lignes_insertion?: Maybe<Scalars['Float']>;
  lignes_total?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type CartographieSourceAggregatorSum = {
  __typename?: 'CartographieSourceAggregatorSum';
  lignes_insertion?: Maybe<Scalars['Float']>;
  lignes_total?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type CartographieSourceConnection = {
  __typename?: 'CartographieSourceConnection';
  aggregate?: Maybe<CartographieSourceAggregator>;
  groupBy?: Maybe<CartographieSourceGroupBy>;
  values?: Maybe<Array<Maybe<CartographieSource>>>;
};

export type CartographieSourceConnectionChamps = {
  __typename?: 'CartographieSourceConnectionChamps';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionCreated_At = {
  __typename?: 'CartographieSourceConnectionCreated_at';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieSourceConnectionDescription = {
  __typename?: 'CartographieSourceConnectionDescription';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionFichier = {
  __typename?: 'CartographieSourceConnectionFichier';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieSourceConnectionId = {
  __typename?: 'CartographieSourceConnectionId';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieSourceConnectionIdentifiant = {
  __typename?: 'CartographieSourceConnectionIdentifiant';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionLignes_Insertion = {
  __typename?: 'CartographieSourceConnectionLignes_insertion';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CartographieSourceConnectionLignes_Total = {
  __typename?: 'CartographieSourceConnectionLignes_total';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CartographieSourceConnectionNom = {
  __typename?: 'CartographieSourceConnectionNom';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionPret_A_Traiter = {
  __typename?: 'CartographieSourceConnectionPret_a_traiter';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type CartographieSourceConnectionRegles = {
  __typename?: 'CartographieSourceConnectionRegles';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieSourceConnectionRegles_Script = {
  __typename?: 'CartographieSourceConnectionRegles_script';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionSource = {
  __typename?: 'CartographieSourceConnectionSource';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionTraitement = {
  __typename?: 'CartographieSourceConnectionTraitement';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionType = {
  __typename?: 'CartographieSourceConnectionType';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieSourceConnectionUpdated_At = {
  __typename?: 'CartographieSourceConnectionUpdated_at';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieSourceConnectionVersion = {
  __typename?: 'CartographieSourceConnectionVersion';
  connection?: Maybe<CartographieSourceConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type CartographieSourceGroupBy = {
  __typename?: 'CartographieSourceGroupBy';
  champs?: Maybe<Array<Maybe<CartographieSourceConnectionChamps>>>;
  created_at?: Maybe<Array<Maybe<CartographieSourceConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<CartographieSourceConnectionDescription>>>;
  fichier?: Maybe<Array<Maybe<CartographieSourceConnectionFichier>>>;
  id?: Maybe<Array<Maybe<CartographieSourceConnectionId>>>;
  identifiant?: Maybe<Array<Maybe<CartographieSourceConnectionIdentifiant>>>;
  lignes_insertion?: Maybe<Array<Maybe<CartographieSourceConnectionLignes_Insertion>>>;
  lignes_total?: Maybe<Array<Maybe<CartographieSourceConnectionLignes_Total>>>;
  nom?: Maybe<Array<Maybe<CartographieSourceConnectionNom>>>;
  pret_a_traiter?: Maybe<Array<Maybe<CartographieSourceConnectionPret_A_Traiter>>>;
  regles?: Maybe<Array<Maybe<CartographieSourceConnectionRegles>>>;
  regles_script?: Maybe<Array<Maybe<CartographieSourceConnectionRegles_Script>>>;
  source?: Maybe<Array<Maybe<CartographieSourceConnectionSource>>>;
  traitement?: Maybe<Array<Maybe<CartographieSourceConnectionTraitement>>>;
  type?: Maybe<Array<Maybe<CartographieSourceConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<CartographieSourceConnectionUpdated_At>>>;
  version?: Maybe<Array<Maybe<CartographieSourceConnectionVersion>>>;
};

export type CartographieSourceInput = {
  champs?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  fichier?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  lignes_insertion?: InputMaybe<Scalars['Int']>;
  lignes_total?: InputMaybe<Scalars['Int']>;
  nom?: InputMaybe<Scalars['String']>;
  pret_a_traiter?: InputMaybe<Scalars['Boolean']>;
  regles?: InputMaybe<ComponentCartographieReglesChampInput>;
  regles_script?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  traitement?: InputMaybe<Enum_Cartographiesource_Traitement>;
  type: Enum_Cartographiesource_Type;
  updated_by?: InputMaybe<Scalars['ID']>;
  version?: InputMaybe<Scalars['Float']>;
};

export type CartographieTypeInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categorie: Enum_Cartographietypes_Categorie;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  identifiant?: InputMaybe<Scalars['String']>;
  nom?: InputMaybe<Scalars['String']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CartographieTypes = {
  __typename?: 'CartographieTypes';
  articles?: Maybe<Array<Maybe<Article>>>;
  categorie: Enum_Cartographietypes_Categorie;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
  thematiques?: Maybe<Array<Maybe<Thematique>>>;
  updated_at: Scalars['DateTime'];
};


export type CartographieTypesArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type CartographieTypesEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type CartographieTypesEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type CartographieTypesThematiquesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CartographieTypesAggregator = {
  __typename?: 'CartographieTypesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CartographieTypesConnection = {
  __typename?: 'CartographieTypesConnection';
  aggregate?: Maybe<CartographieTypesAggregator>;
  groupBy?: Maybe<CartographieTypesGroupBy>;
  values?: Maybe<Array<Maybe<CartographieTypes>>>;
};

export type CartographieTypesConnectionCategorie = {
  __typename?: 'CartographieTypesConnectionCategorie';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieTypesConnectionCreated_At = {
  __typename?: 'CartographieTypesConnectionCreated_at';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieTypesConnectionDescription = {
  __typename?: 'CartographieTypesConnectionDescription';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieTypesConnectionId = {
  __typename?: 'CartographieTypesConnectionId';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CartographieTypesConnectionIdentifiant = {
  __typename?: 'CartographieTypesConnectionIdentifiant';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieTypesConnectionNom = {
  __typename?: 'CartographieTypesConnectionNom';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CartographieTypesConnectionUpdated_At = {
  __typename?: 'CartographieTypesConnectionUpdated_at';
  connection?: Maybe<CartographieTypesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CartographieTypesGroupBy = {
  __typename?: 'CartographieTypesGroupBy';
  categorie?: Maybe<Array<Maybe<CartographieTypesConnectionCategorie>>>;
  created_at?: Maybe<Array<Maybe<CartographieTypesConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<CartographieTypesConnectionDescription>>>;
  id?: Maybe<Array<Maybe<CartographieTypesConnectionId>>>;
  identifiant?: Maybe<Array<Maybe<CartographieTypesConnectionIdentifiant>>>;
  nom?: Maybe<Array<Maybe<CartographieTypesConnectionNom>>>;
  updated_at?: Maybe<Array<Maybe<CartographieTypesConnectionUpdated_At>>>;
};

export type CommentairesEpdInput = {
  commentaire?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  score?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CommentairesEpds = {
  __typename?: 'CommentairesEpds';
  commentaire?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  score?: Maybe<Scalars['Int']>;
  updated_at: Scalars['DateTime'];
};

export type CommentairesEpdsAggregator = {
  __typename?: 'CommentairesEpdsAggregator';
  avg?: Maybe<CommentairesEpdsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<CommentairesEpdsAggregatorMax>;
  min?: Maybe<CommentairesEpdsAggregatorMin>;
  sum?: Maybe<CommentairesEpdsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentairesEpdsAggregatorAvg = {
  __typename?: 'CommentairesEpdsAggregatorAvg';
  score?: Maybe<Scalars['Float']>;
};

export type CommentairesEpdsAggregatorMax = {
  __typename?: 'CommentairesEpdsAggregatorMax';
  score?: Maybe<Scalars['Float']>;
};

export type CommentairesEpdsAggregatorMin = {
  __typename?: 'CommentairesEpdsAggregatorMin';
  score?: Maybe<Scalars['Float']>;
};

export type CommentairesEpdsAggregatorSum = {
  __typename?: 'CommentairesEpdsAggregatorSum';
  score?: Maybe<Scalars['Float']>;
};

export type CommentairesEpdsConnection = {
  __typename?: 'CommentairesEpdsConnection';
  aggregate?: Maybe<CommentairesEpdsAggregator>;
  groupBy?: Maybe<CommentairesEpdsGroupBy>;
  values?: Maybe<Array<Maybe<CommentairesEpds>>>;
};

export type CommentairesEpdsConnectionCommentaire = {
  __typename?: 'CommentairesEpdsConnectionCommentaire';
  connection?: Maybe<CommentairesEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CommentairesEpdsConnectionCreated_At = {
  __typename?: 'CommentairesEpdsConnectionCreated_at';
  connection?: Maybe<CommentairesEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CommentairesEpdsConnectionId = {
  __typename?: 'CommentairesEpdsConnectionId';
  connection?: Maybe<CommentairesEpdsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CommentairesEpdsConnectionScore = {
  __typename?: 'CommentairesEpdsConnectionScore';
  connection?: Maybe<CommentairesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type CommentairesEpdsConnectionUpdated_At = {
  __typename?: 'CommentairesEpdsConnectionUpdated_at';
  connection?: Maybe<CommentairesEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CommentairesEpdsGroupBy = {
  __typename?: 'CommentairesEpdsGroupBy';
  commentaire?: Maybe<Array<Maybe<CommentairesEpdsConnectionCommentaire>>>;
  created_at?: Maybe<Array<Maybe<CommentairesEpdsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CommentairesEpdsConnectionId>>>;
  score?: Maybe<Array<Maybe<CommentairesEpdsConnectionScore>>>;
  updated_at?: Maybe<Array<Maybe<CommentairesEpdsConnectionUpdated_At>>>;
};

export type ComponentCartographieAdresse = {
  __typename?: 'ComponentCartographieAdresse';
  adresse?: Maybe<Scalars['String']>;
  cartographie_ligne?: Maybe<Scalars['String']>;
  code_postal?: Maybe<Scalars['String']>;
  commune?: Maybe<Scalars['String']>;
  geocode?: Maybe<Scalars['Boolean']>;
  geocode_adresse?: Maybe<Scalars['String']>;
  geocode_code_postal?: Maybe<Scalars['String']>;
  geocode_commune?: Maybe<Scalars['String']>;
  geocode_position_latitude?: Maybe<Scalars['Float']>;
  geocode_position_longitude?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  position_latitude?: Maybe<Scalars['Float']>;
  position_longitude?: Maybe<Scalars['Float']>;
};

export type ComponentCartographieAdresseInput = {
  adresse?: InputMaybe<Scalars['String']>;
  cartographie_ligne?: InputMaybe<Scalars['String']>;
  code_postal?: InputMaybe<Scalars['String']>;
  commune?: InputMaybe<Scalars['String']>;
  geocode?: InputMaybe<Scalars['Boolean']>;
  geocode_adresse?: InputMaybe<Scalars['String']>;
  geocode_code_postal?: InputMaybe<Scalars['String']>;
  geocode_commune?: InputMaybe<Scalars['String']>;
  geocode_position_latitude?: InputMaybe<Scalars['Float']>;
  geocode_position_longitude?: InputMaybe<Scalars['Float']>;
  identifiant?: InputMaybe<Scalars['String']>;
  position_latitude?: InputMaybe<Scalars['Float']>;
  position_longitude?: InputMaybe<Scalars['Float']>;
};

export type ComponentCartographieConditionSimple = {
  __typename?: 'ComponentCartographieConditionSimple';
  condition_source?: Maybe<Scalars['String']>;
  condition_valeur?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
};

export type ComponentCartographieConditionSimpleInput = {
  condition_source?: InputMaybe<Scalars['String']>;
  condition_valeur?: InputMaybe<Scalars['String']>;
  identifiant?: InputMaybe<Scalars['String']>;
};

export type ComponentCartographieRegleChamp = {
  __typename?: 'ComponentCartographieRegleChamp';
  conditions?: Maybe<Array<Maybe<ComponentCartographieConditionSimple>>>;
  id: Scalars['ID'];
  valeur: Scalars['String'];
};

export type ComponentCartographieRegleChampInput = {
  conditions?: InputMaybe<Array<InputMaybe<ComponentCartographieConditionSimpleInput>>>;
  valeur: Scalars['String'];
};

export type ComponentCartographieRegleType = {
  __typename?: 'ComponentCartographieRegleType';
  conditions?: Maybe<Array<Maybe<ComponentCartographieConditionSimple>>>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  valeur?: Maybe<CartographieTypes>;
};

export type ComponentCartographieRegleTypeInput = {
  conditions?: InputMaybe<Array<InputMaybe<ComponentCartographieConditionSimpleInput>>>;
  identifiant?: InputMaybe<Scalars['String']>;
  valeur?: InputMaybe<Scalars['ID']>;
};

export type ComponentCartographieReglesChampInput = {
  adresse?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  code_postal?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  commune?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  courriel?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  nom?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  position_latitude?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  position_longitude?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  references?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  site_internet?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  telephone?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleChampInput>>>;
  type?: InputMaybe<Array<InputMaybe<ComponentCartographieRegleTypeInput>>>;
};

export type ComponentCartographieReglesChamps = {
  __typename?: 'ComponentCartographieReglesChamps';
  adresse?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  code_postal?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  commune?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  courriel?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  id: Scalars['ID'];
  nom?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  position_latitude?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  position_longitude?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  references?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  site_internet?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  telephone?: Maybe<Array<Maybe<ComponentCartographieRegleChamp>>>;
  type?: Maybe<Array<Maybe<ComponentCartographieRegleType>>>;
};

export type ComponentCartographieSourceReference = {
  __typename?: 'ComponentCartographieSourceReference';
  cartographie_source?: Maybe<CartographieSource>;
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifiant?: Maybe<Scalars['String']>;
  valeur?: Maybe<Scalars['String']>;
};

export type ComponentCartographieSourceReferenceInput = {
  cartographie_source?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['JSON']>;
  identifiant?: InputMaybe<Scalars['String']>;
  valeur?: InputMaybe<Scalars['String']>;
};

export type ComponentCartographieTypeInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type ComponentCartographieTypes = {
  __typename?: 'ComponentCartographieTypes';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type ComponentTraductionLabel = {
  __typename?: 'ComponentTraductionLabel';
  id: Scalars['ID'];
  label: Scalars['String'];
  texte?: Maybe<Scalars['String']>;
};

export type ComponentTraductionLabelInput = {
  label: Scalars['String'];
  texte?: InputMaybe<Scalars['String']>;
};

/** Configuration */
export type Config = {
  __typename?: 'Config';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  lastAppVersionNumber?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type ConfigInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  lastAppVersionNumber?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ContactInput = {
  commentaire?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_naissance_dernier_enfant?: InputMaybe<Scalars['Date']>;
  date_prise_contact?: InputMaybe<Scalars['Date']>;
  departement_code?: InputMaybe<Scalars['String']>;
  departement_libelle?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Enum_Contacts_Mode>;
  nombre_enfants?: InputMaybe<Scalars['Int']>;
  personne_accompagnee?: InputMaybe<Enum_Contacts_Personne_Accompagnee>;
  prenom?: InputMaybe<Scalars['String']>;
  provenance?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

/** Liste des demandes de contacts (ajouté par Elise) pour permettre d'avoir un suivi plus facile */
export type Contacts = {
  __typename?: 'Contacts';
  commentaire?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  date_naissance_dernier_enfant?: Maybe<Scalars['Date']>;
  date_prise_contact?: Maybe<Scalars['Date']>;
  departement_code?: Maybe<Scalars['String']>;
  departement_libelle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mode?: Maybe<Enum_Contacts_Mode>;
  nombre_enfants?: Maybe<Scalars['Int']>;
  personne_accompagnee?: Maybe<Enum_Contacts_Personne_Accompagnee>;
  prenom?: Maybe<Scalars['String']>;
  provenance?: Maybe<WidgetEpdsSources>;
  updated_at: Scalars['DateTime'];
};

export type ContactsAggregator = {
  __typename?: 'ContactsAggregator';
  avg?: Maybe<ContactsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ContactsAggregatorMax>;
  min?: Maybe<ContactsAggregatorMin>;
  sum?: Maybe<ContactsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactsAggregatorAvg = {
  __typename?: 'ContactsAggregatorAvg';
  nombre_enfants?: Maybe<Scalars['Float']>;
};

export type ContactsAggregatorMax = {
  __typename?: 'ContactsAggregatorMax';
  nombre_enfants?: Maybe<Scalars['Float']>;
};

export type ContactsAggregatorMin = {
  __typename?: 'ContactsAggregatorMin';
  nombre_enfants?: Maybe<Scalars['Float']>;
};

export type ContactsAggregatorSum = {
  __typename?: 'ContactsAggregatorSum';
  nombre_enfants?: Maybe<Scalars['Float']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  aggregate?: Maybe<ContactsAggregator>;
  groupBy?: Maybe<ContactsGroupBy>;
  values?: Maybe<Array<Maybe<Contacts>>>;
};

export type ContactsConnectionCommentaire = {
  __typename?: 'ContactsConnectionCommentaire';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionCreated_At = {
  __typename?: 'ContactsConnectionCreated_at';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ContactsConnectionDate_Naissance_Dernier_Enfant = {
  __typename?: 'ContactsConnectionDate_naissance_dernier_enfant';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionDate_Prise_Contact = {
  __typename?: 'ContactsConnectionDate_prise_contact';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionDepartement_Code = {
  __typename?: 'ContactsConnectionDepartement_code';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionDepartement_Libelle = {
  __typename?: 'ContactsConnectionDepartement_libelle';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionId = {
  __typename?: 'ContactsConnectionId';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionMode = {
  __typename?: 'ContactsConnectionMode';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionNombre_Enfants = {
  __typename?: 'ContactsConnectionNombre_enfants';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ContactsConnectionPersonne_Accompagnee = {
  __typename?: 'ContactsConnectionPersonne_accompagnee';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionPrenom = {
  __typename?: 'ContactsConnectionPrenom';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ContactsConnectionProvenance = {
  __typename?: 'ContactsConnectionProvenance';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ContactsConnectionUpdated_At = {
  __typename?: 'ContactsConnectionUpdated_at';
  connection?: Maybe<ContactsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ContactsGroupBy = {
  __typename?: 'ContactsGroupBy';
  commentaire?: Maybe<Array<Maybe<ContactsConnectionCommentaire>>>;
  created_at?: Maybe<Array<Maybe<ContactsConnectionCreated_At>>>;
  date_naissance_dernier_enfant?: Maybe<Array<Maybe<ContactsConnectionDate_Naissance_Dernier_Enfant>>>;
  date_prise_contact?: Maybe<Array<Maybe<ContactsConnectionDate_Prise_Contact>>>;
  departement_code?: Maybe<Array<Maybe<ContactsConnectionDepartement_Code>>>;
  departement_libelle?: Maybe<Array<Maybe<ContactsConnectionDepartement_Libelle>>>;
  id?: Maybe<Array<Maybe<ContactsConnectionId>>>;
  mode?: Maybe<Array<Maybe<ContactsConnectionMode>>>;
  nombre_enfants?: Maybe<Array<Maybe<ContactsConnectionNombre_Enfants>>>;
  personne_accompagnee?: Maybe<Array<Maybe<ContactsConnectionPersonne_Accompagnee>>>;
  prenom?: Maybe<Array<Maybe<ContactsConnectionPrenom>>>;
  provenance?: Maybe<Array<Maybe<ContactsConnectionProvenance>>>;
  updated_at?: Maybe<Array<Maybe<ContactsConnectionUpdated_At>>>;
};

/** Lier la demande de contact avec la réponse EPDS */
export type DemandeDeContact = {
  __typename?: 'DemandeDeContact';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  reponses_epds?: Maybe<ReponsesEpds>;
  type_de_contact?: Maybe<Enum_Demandedecontact_Type_De_Contact>;
  updated_at: Scalars['DateTime'];
  widget_epds_source?: Maybe<WidgetEpdsSources>;
};

export type DemandeDeContactAggregator = {
  __typename?: 'DemandeDeContactAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DemandeDeContactConnection = {
  __typename?: 'DemandeDeContactConnection';
  aggregate?: Maybe<DemandeDeContactAggregator>;
  groupBy?: Maybe<DemandeDeContactGroupBy>;
  values?: Maybe<Array<Maybe<DemandeDeContact>>>;
};

export type DemandeDeContactConnectionCreated_At = {
  __typename?: 'DemandeDeContactConnectionCreated_at';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DemandeDeContactConnectionId = {
  __typename?: 'DemandeDeContactConnectionId';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DemandeDeContactConnectionReponses_Epds = {
  __typename?: 'DemandeDeContactConnectionReponses_epds';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DemandeDeContactConnectionType_De_Contact = {
  __typename?: 'DemandeDeContactConnectionType_de_contact';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DemandeDeContactConnectionUpdated_At = {
  __typename?: 'DemandeDeContactConnectionUpdated_at';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DemandeDeContactConnectionWidget_Epds_Source = {
  __typename?: 'DemandeDeContactConnectionWidget_epds_source';
  connection?: Maybe<DemandeDeContactConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DemandeDeContactGroupBy = {
  __typename?: 'DemandeDeContactGroupBy';
  created_at?: Maybe<Array<Maybe<DemandeDeContactConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<DemandeDeContactConnectionId>>>;
  reponses_epds?: Maybe<Array<Maybe<DemandeDeContactConnectionReponses_Epds>>>;
  type_de_contact?: Maybe<Array<Maybe<DemandeDeContactConnectionType_De_Contact>>>;
  updated_at?: Maybe<Array<Maybe<DemandeDeContactConnectionUpdated_At>>>;
  widget_epds_source?: Maybe<Array<Maybe<DemandeDeContactConnectionWidget_Epds_Source>>>;
};

export type DemandeDeContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  reponses_epds?: InputMaybe<Scalars['ID']>;
  type_de_contact?: InputMaybe<Enum_Demandedecontact_Type_De_Contact>;
  updated_by?: InputMaybe<Scalars['ID']>;
  widget_epds_source?: InputMaybe<Scalars['ID']>;
};

export enum Enum_Article_Enbref_1_Icone {
  Alimentation = 'alimentation',
  Bebe = 'bebe',
  Parent = 'parent'
}

export enum Enum_Article_Enbref_2_Icone {
  Alimentation = 'alimentation',
  Bebe = 'bebe',
  Parent = 'parent'
}

export enum Enum_Article_Enbref_3_Icone {
  Alimentation = 'alimentation',
  Bebe = 'bebe',
  Parent = 'parent'
}

export enum Enum_Cartographiesource_Traitement {
  EnCours = 'en_cours',
  Fait = 'fait',
  NonFait = 'non_fait'
}

export enum Enum_Cartographiesource_Type {
  Api = 'api',
  Fichier = 'fichier'
}

export enum Enum_Cartographietypes_Categorie {
  Professionnel = 'professionnel',
  Structure = 'structure'
}

export enum Enum_Contacts_Mode {
  Chat = 'chat',
  Email = 'email',
  Sms = 'sms'
}

export enum Enum_Contacts_Personne_Accompagnee {
  Aidee = 'aidee',
  EchangeInitial = 'echange_initial',
  NonAccompagnee = 'non_accompagnee',
  Orientee = 'orientee'
}

export enum Enum_Demandedecontact_Type_De_Contact {
  Chat = 'chat',
  Email = 'email',
  Sms = 'sms'
}

export enum Enum_Informationsdemographiques_Age {
  Entre18_25ans = 'entre18_25ans',
  Entre25_30ans = 'entre25_30ans',
  Entre30_35ans = 'entre30_35ans',
  Entre35_40ans = 'entre35_40ans',
  Entre40_45ans = 'entre40_45ans',
  MoinsDe18ans = 'moinsDe18ans',
  PlusDe45ans = 'plusDe45ans'
}

export enum Enum_Informationsdemographiques_Entourage_Dispo {
  JeNeSaisPas = 'jeNeSaisPas',
  Non = 'non',
  Oui = 'oui'
}

export enum Enum_Informationsdemographiques_Genre {
  Femme = 'femme',
  Homme = 'homme',
  NonPrecise = 'nonPrecise'
}

export enum Enum_Reponsesepds_Genre {
  Feminin = 'Feminin',
  Inconnu = 'Inconnu',
  Masculin = 'Masculin',
  Nonbinaire = 'Nonbinaire'
}

export enum Enum_Reponsesepds_Source {
  ApplicationMobile = 'ApplicationMobile',
  SitePartenaire = 'SitePartenaire',
  SiteWebPro = 'SiteWebPro'
}

export type Etape = {
  __typename?: 'Etape';
  articles?: Maybe<Array<Maybe<Article>>>;
  cartographie_types?: Maybe<Array<Maybe<CartographieTypes>>>;
  created_at: Scalars['DateTime'];
  debut?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  fin?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  ordre?: Maybe<Scalars['Int']>;
  parcours?: Maybe<Array<Maybe<Parcours>>>;
  parentheque_documents?: Maybe<Array<Maybe<ParenthequeDocuments>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  thematiques?: Maybe<Array<Maybe<Thematique>>>;
  updated_at: Scalars['DateTime'];
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type EtapeArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeCartographie_TypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeParcoursArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeParentheque_DocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeThematiquesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EtapeVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EtapeAggregator = {
  __typename?: 'EtapeAggregator';
  avg?: Maybe<EtapeAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EtapeAggregatorMax>;
  min?: Maybe<EtapeAggregatorMin>;
  sum?: Maybe<EtapeAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EtapeAggregatorAvg = {
  __typename?: 'EtapeAggregatorAvg';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
  ordre?: Maybe<Scalars['Float']>;
};

export type EtapeAggregatorMax = {
  __typename?: 'EtapeAggregatorMax';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
  ordre?: Maybe<Scalars['Float']>;
};

export type EtapeAggregatorMin = {
  __typename?: 'EtapeAggregatorMin';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
  ordre?: Maybe<Scalars['Float']>;
};

export type EtapeAggregatorSum = {
  __typename?: 'EtapeAggregatorSum';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
  ordre?: Maybe<Scalars['Float']>;
};

export type EtapeConnection = {
  __typename?: 'EtapeConnection';
  aggregate?: Maybe<EtapeAggregator>;
  groupBy?: Maybe<EtapeGroupBy>;
  values?: Maybe<Array<Maybe<Etape>>>;
};

export type EtapeConnectionCreated_At = {
  __typename?: 'EtapeConnectionCreated_at';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EtapeConnectionDebut = {
  __typename?: 'EtapeConnectionDebut';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EtapeConnectionDescription = {
  __typename?: 'EtapeConnectionDescription';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EtapeConnectionFin = {
  __typename?: 'EtapeConnectionFin';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EtapeConnectionId = {
  __typename?: 'EtapeConnectionId';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EtapeConnectionNom = {
  __typename?: 'EtapeConnectionNom';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EtapeConnectionOrdre = {
  __typename?: 'EtapeConnectionOrdre';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EtapeConnectionPublished_At = {
  __typename?: 'EtapeConnectionPublished_at';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EtapeConnectionUpdated_At = {
  __typename?: 'EtapeConnectionUpdated_at';
  connection?: Maybe<EtapeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EtapeGroupBy = {
  __typename?: 'EtapeGroupBy';
  created_at?: Maybe<Array<Maybe<EtapeConnectionCreated_At>>>;
  debut?: Maybe<Array<Maybe<EtapeConnectionDebut>>>;
  description?: Maybe<Array<Maybe<EtapeConnectionDescription>>>;
  fin?: Maybe<Array<Maybe<EtapeConnectionFin>>>;
  id?: Maybe<Array<Maybe<EtapeConnectionId>>>;
  nom?: Maybe<Array<Maybe<EtapeConnectionNom>>>;
  ordre?: Maybe<Array<Maybe<EtapeConnectionOrdre>>>;
  published_at?: Maybe<Array<Maybe<EtapeConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<EtapeConnectionUpdated_At>>>;
};

export type EtapeInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cartographie_types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  debut?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fin?: InputMaybe<Scalars['Int']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  parcours?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  parentheque_documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Evenement = {
  __typename?: 'Evenement';
  articles?: Maybe<Array<Maybe<Article>>>;
  created_at: Scalars['DateTime'];
  debut?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<ParenthequeDocuments>>>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  fin?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  important?: Maybe<Scalars['Boolean']>;
  nom: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  thematique?: Maybe<Thematique>;
  types_poi?: Maybe<Array<Maybe<CartographieTypes>>>;
  updated_at: Scalars['DateTime'];
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type EvenementArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EvenementDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EvenementEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EvenementTypes_PoiArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type EvenementVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EvenementAggregator = {
  __typename?: 'EvenementAggregator';
  avg?: Maybe<EvenementAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<EvenementAggregatorMax>;
  min?: Maybe<EvenementAggregatorMin>;
  sum?: Maybe<EvenementAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvenementAggregatorAvg = {
  __typename?: 'EvenementAggregatorAvg';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
};

export type EvenementAggregatorMax = {
  __typename?: 'EvenementAggregatorMax';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
};

export type EvenementAggregatorMin = {
  __typename?: 'EvenementAggregatorMin';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
};

export type EvenementAggregatorSum = {
  __typename?: 'EvenementAggregatorSum';
  debut?: Maybe<Scalars['Float']>;
  fin?: Maybe<Scalars['Float']>;
};

export type EvenementConnection = {
  __typename?: 'EvenementConnection';
  aggregate?: Maybe<EvenementAggregator>;
  groupBy?: Maybe<EvenementGroupBy>;
  values?: Maybe<Array<Maybe<Evenement>>>;
};

export type EvenementConnectionCreated_At = {
  __typename?: 'EvenementConnectionCreated_at';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EvenementConnectionDebut = {
  __typename?: 'EvenementConnectionDebut';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EvenementConnectionDescription = {
  __typename?: 'EvenementConnectionDescription';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EvenementConnectionFin = {
  __typename?: 'EvenementConnectionFin';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type EvenementConnectionId = {
  __typename?: 'EvenementConnectionId';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EvenementConnectionImportant = {
  __typename?: 'EvenementConnectionImportant';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type EvenementConnectionNom = {
  __typename?: 'EvenementConnectionNom';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EvenementConnectionPublished_At = {
  __typename?: 'EvenementConnectionPublished_at';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EvenementConnectionThematique = {
  __typename?: 'EvenementConnectionThematique';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EvenementConnectionUpdated_At = {
  __typename?: 'EvenementConnectionUpdated_at';
  connection?: Maybe<EvenementConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EvenementGroupBy = {
  __typename?: 'EvenementGroupBy';
  created_at?: Maybe<Array<Maybe<EvenementConnectionCreated_At>>>;
  debut?: Maybe<Array<Maybe<EvenementConnectionDebut>>>;
  description?: Maybe<Array<Maybe<EvenementConnectionDescription>>>;
  fin?: Maybe<Array<Maybe<EvenementConnectionFin>>>;
  id?: Maybe<Array<Maybe<EvenementConnectionId>>>;
  important?: Maybe<Array<Maybe<EvenementConnectionImportant>>>;
  nom?: Maybe<Array<Maybe<EvenementConnectionNom>>>;
  published_at?: Maybe<Array<Maybe<EvenementConnectionPublished_At>>>;
  thematique?: Maybe<Array<Maybe<EvenementConnectionThematique>>>;
  updated_at?: Maybe<Array<Maybe<EvenementConnectionUpdated_At>>>;
};

export type EvenementInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  debut?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fin?: InputMaybe<Scalars['Int']>;
  important?: InputMaybe<Scalars['Boolean']>;
  nom: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  types_poi?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Informations = {
  conception?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['String']>;
  enfant?: InputMaybe<Scalars['Boolean']>;
  enfants?: InputMaybe<Scalars['Boolean']>;
  grossesse?: InputMaybe<Scalars['Boolean']>;
  projet?: InputMaybe<Scalars['Boolean']>;
};

export type InformationsDemographiqueInput = {
  age?: InputMaybe<Enum_Informationsdemographiques_Age>;
  code_postal?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  csp_code?: InputMaybe<Scalars['String']>;
  csp_libelle?: InputMaybe<Scalars['String']>;
  departement?: InputMaybe<Scalars['String']>;
  departement_libelle?: InputMaybe<Scalars['String']>;
  entourage_dispo?: InputMaybe<Enum_Informationsdemographiques_Entourage_Dispo>;
  genre?: InputMaybe<Enum_Informationsdemographiques_Genre>;
  region?: InputMaybe<Scalars['String']>;
  reponses_epds?: InputMaybe<Scalars['ID']>;
  situation?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  ville?: InputMaybe<Scalars['String']>;
};

/** Informations démographiques des utilisateurs */
export type InformationsDemographiques = {
  __typename?: 'InformationsDemographiques';
  age?: Maybe<Enum_Informationsdemographiques_Age>;
  code_postal?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  csp_code?: Maybe<Scalars['String']>;
  csp_libelle?: Maybe<Scalars['String']>;
  departement?: Maybe<Scalars['String']>;
  departement_libelle?: Maybe<Scalars['String']>;
  entourage_dispo?: Maybe<Enum_Informationsdemographiques_Entourage_Dispo>;
  genre?: Maybe<Enum_Informationsdemographiques_Genre>;
  id: Scalars['ID'];
  region?: Maybe<Scalars['String']>;
  reponses_epds?: Maybe<ReponsesEpds>;
  situation?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  ville?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesAggregator = {
  __typename?: 'InformationsDemographiquesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InformationsDemographiquesConnection = {
  __typename?: 'InformationsDemographiquesConnection';
  aggregate?: Maybe<InformationsDemographiquesAggregator>;
  groupBy?: Maybe<InformationsDemographiquesGroupBy>;
  values?: Maybe<Array<Maybe<InformationsDemographiques>>>;
};

export type InformationsDemographiquesConnectionAge = {
  __typename?: 'InformationsDemographiquesConnectionAge';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionCode_Postal = {
  __typename?: 'InformationsDemographiquesConnectionCode_postal';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionCreated_At = {
  __typename?: 'InformationsDemographiquesConnectionCreated_at';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type InformationsDemographiquesConnectionCsp_Code = {
  __typename?: 'InformationsDemographiquesConnectionCsp_code';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionCsp_Libelle = {
  __typename?: 'InformationsDemographiquesConnectionCsp_libelle';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionDepartement = {
  __typename?: 'InformationsDemographiquesConnectionDepartement';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionDepartement_Libelle = {
  __typename?: 'InformationsDemographiquesConnectionDepartement_libelle';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionEntourage_Dispo = {
  __typename?: 'InformationsDemographiquesConnectionEntourage_dispo';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionGenre = {
  __typename?: 'InformationsDemographiquesConnectionGenre';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionId = {
  __typename?: 'InformationsDemographiquesConnectionId';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InformationsDemographiquesConnectionRegion = {
  __typename?: 'InformationsDemographiquesConnectionRegion';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionReponses_Epds = {
  __typename?: 'InformationsDemographiquesConnectionReponses_epds';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type InformationsDemographiquesConnectionSituation = {
  __typename?: 'InformationsDemographiquesConnectionSituation';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesConnectionUpdated_At = {
  __typename?: 'InformationsDemographiquesConnectionUpdated_at';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type InformationsDemographiquesConnectionVille = {
  __typename?: 'InformationsDemographiquesConnectionVille';
  connection?: Maybe<InformationsDemographiquesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type InformationsDemographiquesGroupBy = {
  __typename?: 'InformationsDemographiquesGroupBy';
  age?: Maybe<Array<Maybe<InformationsDemographiquesConnectionAge>>>;
  code_postal?: Maybe<Array<Maybe<InformationsDemographiquesConnectionCode_Postal>>>;
  created_at?: Maybe<Array<Maybe<InformationsDemographiquesConnectionCreated_At>>>;
  csp_code?: Maybe<Array<Maybe<InformationsDemographiquesConnectionCsp_Code>>>;
  csp_libelle?: Maybe<Array<Maybe<InformationsDemographiquesConnectionCsp_Libelle>>>;
  departement?: Maybe<Array<Maybe<InformationsDemographiquesConnectionDepartement>>>;
  departement_libelle?: Maybe<Array<Maybe<InformationsDemographiquesConnectionDepartement_Libelle>>>;
  entourage_dispo?: Maybe<Array<Maybe<InformationsDemographiquesConnectionEntourage_Dispo>>>;
  genre?: Maybe<Array<Maybe<InformationsDemographiquesConnectionGenre>>>;
  id?: Maybe<Array<Maybe<InformationsDemographiquesConnectionId>>>;
  region?: Maybe<Array<Maybe<InformationsDemographiquesConnectionRegion>>>;
  reponses_epds?: Maybe<Array<Maybe<InformationsDemographiquesConnectionReponses_Epds>>>;
  situation?: Maybe<Array<Maybe<InformationsDemographiquesConnectionSituation>>>;
  updated_at?: Maybe<Array<Maybe<InformationsDemographiquesConnectionUpdated_At>>>;
  ville?: Maybe<Array<Maybe<InformationsDemographiquesConnectionVille>>>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type LabelsEpdsTraductionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<ComponentTraductionLabelInput>>>;
  langue?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type LabelsEpdsTraductions = {
  __typename?: 'LabelsEpdsTraductions';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  labels?: Maybe<Array<Maybe<ComponentTraductionLabel>>>;
  langue?: Maybe<Locale>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type LabelsEpdsTraductionsAggregator = {
  __typename?: 'LabelsEpdsTraductionsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LabelsEpdsTraductionsConnection = {
  __typename?: 'LabelsEpdsTraductionsConnection';
  aggregate?: Maybe<LabelsEpdsTraductionsAggregator>;
  groupBy?: Maybe<LabelsEpdsTraductionsGroupBy>;
  values?: Maybe<Array<Maybe<LabelsEpdsTraductions>>>;
};

export type LabelsEpdsTraductionsConnectionCreated_At = {
  __typename?: 'LabelsEpdsTraductionsConnectionCreated_at';
  connection?: Maybe<LabelsEpdsTraductionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LabelsEpdsTraductionsConnectionId = {
  __typename?: 'LabelsEpdsTraductionsConnectionId';
  connection?: Maybe<LabelsEpdsTraductionsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LabelsEpdsTraductionsConnectionLangue = {
  __typename?: 'LabelsEpdsTraductionsConnectionLangue';
  connection?: Maybe<LabelsEpdsTraductionsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LabelsEpdsTraductionsConnectionPublished_At = {
  __typename?: 'LabelsEpdsTraductionsConnectionPublished_at';
  connection?: Maybe<LabelsEpdsTraductionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LabelsEpdsTraductionsConnectionUpdated_At = {
  __typename?: 'LabelsEpdsTraductionsConnectionUpdated_at';
  connection?: Maybe<LabelsEpdsTraductionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LabelsEpdsTraductionsGroupBy = {
  __typename?: 'LabelsEpdsTraductionsGroupBy';
  created_at?: Maybe<Array<Maybe<LabelsEpdsTraductionsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<LabelsEpdsTraductionsConnectionId>>>;
  langue?: Maybe<Array<Maybe<LabelsEpdsTraductionsConnectionLangue>>>;
  published_at?: Maybe<Array<Maybe<LabelsEpdsTraductionsConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<LabelsEpdsTraductionsConnectionUpdated_At>>>;
};

export type Locale = {
  __typename?: 'Locale';
  created_at: Scalars['DateTime'];
  drapeau?: Maybe<UploadFile>;
  id: Scalars['ID'];
  identifiant: Scalars['String'];
  libelle_francais?: Maybe<Scalars['String']>;
  libelle_langue?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sens_lecture_droite_vers_gauche: Scalars['Boolean'];
  updated_at: Scalars['DateTime'];
};

export type LocaleAggregator = {
  __typename?: 'LocaleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocaleConnection = {
  __typename?: 'LocaleConnection';
  aggregate?: Maybe<LocaleAggregator>;
  groupBy?: Maybe<LocaleGroupBy>;
  values?: Maybe<Array<Maybe<Locale>>>;
};

export type LocaleConnectionCreated_At = {
  __typename?: 'LocaleConnectionCreated_at';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LocaleConnectionDrapeau = {
  __typename?: 'LocaleConnectionDrapeau';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LocaleConnectionId = {
  __typename?: 'LocaleConnectionId';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LocaleConnectionIdentifiant = {
  __typename?: 'LocaleConnectionIdentifiant';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LocaleConnectionLibelle_Francais = {
  __typename?: 'LocaleConnectionLibelle_francais';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LocaleConnectionLibelle_Langue = {
  __typename?: 'LocaleConnectionLibelle_langue';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LocaleConnectionPublished_At = {
  __typename?: 'LocaleConnectionPublished_at';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LocaleConnectionSens_Lecture_Droite_Vers_Gauche = {
  __typename?: 'LocaleConnectionSens_lecture_droite_vers_gauche';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type LocaleConnectionUpdated_At = {
  __typename?: 'LocaleConnectionUpdated_at';
  connection?: Maybe<LocaleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LocaleGroupBy = {
  __typename?: 'LocaleGroupBy';
  created_at?: Maybe<Array<Maybe<LocaleConnectionCreated_At>>>;
  drapeau?: Maybe<Array<Maybe<LocaleConnectionDrapeau>>>;
  id?: Maybe<Array<Maybe<LocaleConnectionId>>>;
  identifiant?: Maybe<Array<Maybe<LocaleConnectionIdentifiant>>>;
  libelle_francais?: Maybe<Array<Maybe<LocaleConnectionLibelle_Francais>>>;
  libelle_langue?: Maybe<Array<Maybe<LocaleConnectionLibelle_Langue>>>;
  published_at?: Maybe<Array<Maybe<LocaleConnectionPublished_At>>>;
  sens_lecture_droite_vers_gauche?: Maybe<Array<Maybe<LocaleConnectionSens_Lecture_Droite_Vers_Gauche>>>;
  updated_at?: Maybe<Array<Maybe<LocaleConnectionUpdated_At>>>;
};

export type LocaleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  drapeau?: InputMaybe<Scalars['ID']>;
  identifiant: Scalars['String'];
  libelle_francais?: InputMaybe<Scalars['String']>;
  libelle_langue?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sens_lecture_droite_vers_gauche?: InputMaybe<Scalars['Boolean']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = Article | ArticleAggregator | ArticleAggregatorAvg | ArticleAggregatorMax | ArticleAggregatorMin | ArticleAggregatorSum | ArticleConnection | ArticleConnectionCreated_At | ArticleConnectionEnbref_1_Icone | ArticleConnectionEnbref_1_Texte | ArticleConnectionEnbref_2_Icone | ArticleConnectionEnbref_2_Texte | ArticleConnectionEnbref_3_Icone | ArticleConnectionEnbref_3_Texte | ArticleConnectionId | ArticleConnectionLe_Saviez_Vous | ArticleConnectionLien_1_Titre | ArticleConnectionLien_1_Url | ArticleConnectionLien_2_Titre | ArticleConnectionLien_2_Url | ArticleConnectionLien_3_Titre | ArticleConnectionLien_3_Url | ArticleConnectionLien_4_Titre | ArticleConnectionLien_4_Url | ArticleConnectionMots_Cles | ArticleConnectionNotifications | ArticleConnectionOrdre | ArticleConnectionPublished_At | ArticleConnectionResume | ArticleConnectionTexte_1 | ArticleConnectionTexte_1_Titre | ArticleConnectionTexte_2 | ArticleConnectionTexte_2_Titre | ArticleConnectionTitre | ArticleConnectionUpdated_At | ArticleConnectionVisuel | ArticleGroupBy | CartographieDsTypes | CartographieDsTypesAggregator | CartographieDsTypesConnection | CartographieDsTypesConnectionCartographie_Pois_Type | CartographieDsTypesConnectionCreated_At | CartographieDsTypesConnectionId | CartographieDsTypesConnectionIdentifiant | CartographieDsTypesConnectionUpdated_At | CartographieDsTypesGroupBy | CartographiePoi | CartographiePoiAdresse | CartographiePoiAggregator | CartographiePoiConnection | CartographiePoiConnectionCartographie_Adresses_Json | CartographiePoiConnectionCartographie_References_Json | CartographiePoiConnectionCourriel | CartographiePoiConnectionCreated_At | CartographiePoiConnectionId | CartographiePoiConnectionIdentifiant | CartographiePoiConnectionNom | CartographiePoiConnectionSite_Internet | CartographiePoiConnectionTelephone | CartographiePoiConnectionType | CartographiePoiConnectionUpdated_At | CartographiePoiGroupBy | CartographieSource | CartographieSourceAggregator | CartographieSourceAggregatorAvg | CartographieSourceAggregatorMax | CartographieSourceAggregatorMin | CartographieSourceAggregatorSum | CartographieSourceConnection | CartographieSourceConnectionChamps | CartographieSourceConnectionCreated_At | CartographieSourceConnectionDescription | CartographieSourceConnectionFichier | CartographieSourceConnectionId | CartographieSourceConnectionIdentifiant | CartographieSourceConnectionLignes_Insertion | CartographieSourceConnectionLignes_Total | CartographieSourceConnectionNom | CartographieSourceConnectionPret_A_Traiter | CartographieSourceConnectionRegles | CartographieSourceConnectionRegles_Script | CartographieSourceConnectionSource | CartographieSourceConnectionTraitement | CartographieSourceConnectionType | CartographieSourceConnectionUpdated_At | CartographieSourceConnectionVersion | CartographieSourceGroupBy | CartographieTypes | CartographieTypesAggregator | CartographieTypesConnection | CartographieTypesConnectionCategorie | CartographieTypesConnectionCreated_At | CartographieTypesConnectionDescription | CartographieTypesConnectionId | CartographieTypesConnectionIdentifiant | CartographieTypesConnectionNom | CartographieTypesConnectionUpdated_At | CartographieTypesGroupBy | CommentairesEpds | CommentairesEpdsAggregator | CommentairesEpdsAggregatorAvg | CommentairesEpdsAggregatorMax | CommentairesEpdsAggregatorMin | CommentairesEpdsAggregatorSum | CommentairesEpdsConnection | CommentairesEpdsConnectionCommentaire | CommentairesEpdsConnectionCreated_At | CommentairesEpdsConnectionId | CommentairesEpdsConnectionScore | CommentairesEpdsConnectionUpdated_At | CommentairesEpdsGroupBy | ComponentCartographieAdresse | ComponentCartographieConditionSimple | ComponentCartographieRegleChamp | ComponentCartographieRegleType | ComponentCartographieReglesChamps | ComponentCartographieSourceReference | ComponentCartographieTypes | ComponentTraductionLabel | Config | Contacts | ContactsAggregator | ContactsAggregatorAvg | ContactsAggregatorMax | ContactsAggregatorMin | ContactsAggregatorSum | ContactsConnection | ContactsConnectionCommentaire | ContactsConnectionCreated_At | ContactsConnectionDate_Naissance_Dernier_Enfant | ContactsConnectionDate_Prise_Contact | ContactsConnectionDepartement_Code | ContactsConnectionDepartement_Libelle | ContactsConnectionId | ContactsConnectionMode | ContactsConnectionNombre_Enfants | ContactsConnectionPersonne_Accompagnee | ContactsConnectionPrenom | ContactsConnectionProvenance | ContactsConnectionUpdated_At | ContactsGroupBy | DemandeDeContact | DemandeDeContactAggregator | DemandeDeContactConnection | DemandeDeContactConnectionCreated_At | DemandeDeContactConnectionId | DemandeDeContactConnectionReponses_Epds | DemandeDeContactConnectionType_De_Contact | DemandeDeContactConnectionUpdated_At | DemandeDeContactConnectionWidget_Epds_Source | DemandeDeContactGroupBy | Etape | EtapeAggregator | EtapeAggregatorAvg | EtapeAggregatorMax | EtapeAggregatorMin | EtapeAggregatorSum | EtapeConnection | EtapeConnectionCreated_At | EtapeConnectionDebut | EtapeConnectionDescription | EtapeConnectionFin | EtapeConnectionId | EtapeConnectionNom | EtapeConnectionOrdre | EtapeConnectionPublished_At | EtapeConnectionUpdated_At | EtapeGroupBy | Evenement | EvenementAggregator | EvenementAggregatorAvg | EvenementAggregatorMax | EvenementAggregatorMin | EvenementAggregatorSum | EvenementConnection | EvenementConnectionCreated_At | EvenementConnectionDebut | EvenementConnectionDescription | EvenementConnectionFin | EvenementConnectionId | EvenementConnectionImportant | EvenementConnectionNom | EvenementConnectionPublished_At | EvenementConnectionThematique | EvenementConnectionUpdated_At | EvenementGroupBy | InformationsDemographiques | InformationsDemographiquesAggregator | InformationsDemographiquesConnection | InformationsDemographiquesConnectionAge | InformationsDemographiquesConnectionCode_Postal | InformationsDemographiquesConnectionCreated_At | InformationsDemographiquesConnectionCsp_Code | InformationsDemographiquesConnectionCsp_Libelle | InformationsDemographiquesConnectionDepartement | InformationsDemographiquesConnectionDepartement_Libelle | InformationsDemographiquesConnectionEntourage_Dispo | InformationsDemographiquesConnectionGenre | InformationsDemographiquesConnectionId | InformationsDemographiquesConnectionRegion | InformationsDemographiquesConnectionReponses_Epds | InformationsDemographiquesConnectionSituation | InformationsDemographiquesConnectionUpdated_At | InformationsDemographiquesConnectionVille | InformationsDemographiquesGroupBy | LabelsEpdsTraductions | LabelsEpdsTraductionsAggregator | LabelsEpdsTraductionsConnection | LabelsEpdsTraductionsConnectionCreated_At | LabelsEpdsTraductionsConnectionId | LabelsEpdsTraductionsConnectionLangue | LabelsEpdsTraductionsConnectionPublished_At | LabelsEpdsTraductionsConnectionUpdated_At | LabelsEpdsTraductionsGroupBy | Locale | LocaleAggregator | LocaleConnection | LocaleConnectionCreated_At | LocaleConnectionDrapeau | LocaleConnectionId | LocaleConnectionIdentifiant | LocaleConnectionLibelle_Francais | LocaleConnectionLibelle_Langue | LocaleConnectionPublished_At | LocaleConnectionSens_Lecture_Droite_Vers_Gauche | LocaleConnectionUpdated_At | LocaleGroupBy | Parcours | ParcoursAggregator | ParcoursConnection | ParcoursConnectionCreated_At | ParcoursConnectionDescription | ParcoursConnectionId | ParcoursConnectionNom | ParcoursConnectionPublished_At | ParcoursConnectionUpdated_At | ParcoursGroupBy | ParenthequeDocuments | ParenthequeDocumentsAggregator | ParenthequeDocumentsAggregatorAvg | ParenthequeDocumentsAggregatorMax | ParenthequeDocumentsAggregatorMin | ParenthequeDocumentsAggregatorSum | ParenthequeDocumentsConnection | ParenthequeDocumentsConnectionCreated_At | ParenthequeDocumentsConnectionDescription | ParenthequeDocumentsConnectionFichier | ParenthequeDocumentsConnectionId | ParenthequeDocumentsConnectionNom | ParenthequeDocumentsConnectionOrdre | ParenthequeDocumentsConnectionPublished_At | ParenthequeDocumentsConnectionThematique | ParenthequeDocumentsConnectionUpdated_At | ParenthequeDocumentsGroupBy | QuestionnaireEpds | QuestionnaireEpdsAggregator | QuestionnaireEpdsAggregatorAvg | QuestionnaireEpdsAggregatorMax | QuestionnaireEpdsAggregatorMin | QuestionnaireEpdsAggregatorSum | QuestionnaireEpdsConnection | QuestionnaireEpdsConnectionCreated_At | QuestionnaireEpdsConnectionId | QuestionnaireEpdsConnectionLibelle | QuestionnaireEpdsConnectionLocale | QuestionnaireEpdsConnectionOrdre | QuestionnaireEpdsConnectionReponse_1_Libelle | QuestionnaireEpdsConnectionReponse_1_Points | QuestionnaireEpdsConnectionReponse_2_Libelle | QuestionnaireEpdsConnectionReponse_2_Points | QuestionnaireEpdsConnectionReponse_3_Libelle | QuestionnaireEpdsConnectionReponse_3_Points | QuestionnaireEpdsConnectionReponse_4_Libelle | QuestionnaireEpdsConnectionReponse_4_Points | QuestionnaireEpdsConnectionUpdated_At | QuestionnaireEpdsGroupBy | QuestionnaireEpdsTraductions | QuestionnaireEpdsTraductionsAggregator | QuestionnaireEpdsTraductionsAggregatorAvg | QuestionnaireEpdsTraductionsAggregatorMax | QuestionnaireEpdsTraductionsAggregatorMin | QuestionnaireEpdsTraductionsAggregatorSum | QuestionnaireEpdsTraductionsConnection | QuestionnaireEpdsTraductionsConnectionCreated_At | QuestionnaireEpdsTraductionsConnectionId | QuestionnaireEpdsTraductionsConnectionLangue | QuestionnaireEpdsTraductionsConnectionLibelle | QuestionnaireEpdsTraductionsConnectionOrdre | QuestionnaireEpdsTraductionsConnectionReponse_1_Libelle | QuestionnaireEpdsTraductionsConnectionReponse_1_Points | QuestionnaireEpdsTraductionsConnectionReponse_2_Libelle | QuestionnaireEpdsTraductionsConnectionReponse_2_Points | QuestionnaireEpdsTraductionsConnectionReponse_3_Libelle | QuestionnaireEpdsTraductionsConnectionReponse_3_Points | QuestionnaireEpdsTraductionsConnectionReponse_4_Libelle | QuestionnaireEpdsTraductionsConnectionReponse_4_Points | QuestionnaireEpdsTraductionsConnectionUpdated_At | QuestionnaireEpdsTraductionsGroupBy | ReponsesEpds | ReponsesEpdsAggregator | ReponsesEpdsAggregatorAvg | ReponsesEpdsAggregatorMax | ReponsesEpdsAggregatorMin | ReponsesEpdsAggregatorSum | ReponsesEpdsConnection | ReponsesEpdsConnectionCompteur | ReponsesEpdsConnectionCreated_At | ReponsesEpdsConnectionGenre | ReponsesEpdsConnectionId | ReponsesEpdsConnectionLangue | ReponsesEpdsConnectionReponse_1 | ReponsesEpdsConnectionReponse_2 | ReponsesEpdsConnectionReponse_3 | ReponsesEpdsConnectionReponse_4 | ReponsesEpdsConnectionReponse_5 | ReponsesEpdsConnectionReponse_6 | ReponsesEpdsConnectionReponse_7 | ReponsesEpdsConnectionReponse_8 | ReponsesEpdsConnectionReponse_9 | ReponsesEpdsConnectionReponse_10 | ReponsesEpdsConnectionScore | ReponsesEpdsConnectionSource | ReponsesEpdsConnectionSource_Widget | ReponsesEpdsConnectionUpdated_At | ReponsesEpdsGroupBy | Temoignage | TemoignageAggregator | TemoignageConnection | TemoignageConnectionChiffre_Choc | TemoignageConnectionCreated_At | TemoignageConnectionId | TemoignageConnectionPublished_At | TemoignageConnectionSource | TemoignageConnectionTexte | TemoignageConnectionTitre | TemoignageConnectionUpdated_At | TemoignageGroupBy | Thematique | ThematiqueAggregator | ThematiqueConnection | ThematiqueConnectionCreated_At | ThematiqueConnectionDescription | ThematiqueConnectionId | ThematiqueConnectionNom | ThematiqueConnectionPublished_At | ThematiqueConnectionUpdated_At | ThematiqueGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Video | VideoAggregator | VideoAggregatorAvg | VideoAggregatorMax | VideoAggregatorMin | VideoAggregatorSum | VideoConnection | VideoConnectionCreated_At | VideoConnectionDescription | VideoConnectionId | VideoConnectionMiniature | VideoConnectionNom | VideoConnectionOrdre | VideoConnectionPublished_At | VideoConnectionThematique | VideoConnectionUpdated_At | VideoConnectionUrl | VideoGroupBy | WidgetEpdsSources | WidgetEpdsSourcesAggregator | WidgetEpdsSourcesConnection | WidgetEpdsSourcesConnectionCreated_At | WidgetEpdsSourcesConnectionId | WidgetEpdsSourcesConnectionNom | WidgetEpdsSourcesConnectionPublished_At | WidgetEpdsSourcesConnectionUpdated_At | WidgetEpdsSourcesGroupBy | CreateArticlePayload | CreateCartographieDsTypePayload | CreateCartographiePoiPayload | CreateCartographieSourcePayload | CreateCartographieTypePayload | CreateCommentairesEpdPayload | CreateContactPayload | CreateDemandeDeContactPayload | CreateEtapePayload | CreateEvenementPayload | CreateInformationsDemographiquePayload | CreateLabelsEpdsTraductionPayload | CreateLocalePayload | CreateParcourPayload | CreateParenthequeDocumentPayload | CreateQuestionnaireEpdPayload | CreateQuestionnaireEpdsTraductionPayload | CreateReponsesEpdPayload | CreateRolePayload | CreateTemoignagePayload | CreateThematiquePayload | CreateUserPayload | CreateVideoPayload | CreateWidgetEpdsSourcePayload | DeleteArticlePayload | DeleteCartographieDsTypePayload | DeleteCartographiePoiPayload | DeleteCartographieSourcePayload | DeleteCartographieTypePayload | DeleteCommentairesEpdPayload | DeleteConfigPayload | DeleteContactPayload | DeleteDemandeDeContactPayload | DeleteEtapePayload | DeleteEvenementPayload | DeleteFilePayload | DeleteInformationsDemographiquePayload | DeleteLabelsEpdsTraductionPayload | DeleteLocalePayload | DeleteParcourPayload | DeleteParenthequeDocumentPayload | DeleteQuestionnaireEpdPayload | DeleteQuestionnaireEpdsTraductionPayload | DeleteReponsesEpdPayload | DeleteRolePayload | DeleteTemoignagePayload | DeleteThematiquePayload | DeleteUserPayload | DeleteVideoPayload | DeleteWidgetEpdsSourcePayload | UpdateArticlePayload | UpdateCartographieDsTypePayload | UpdateCartographiePoiPayload | UpdateCartographieSourcePayload | UpdateCartographieTypePayload | UpdateCommentairesEpdPayload | UpdateConfigPayload | UpdateContactPayload | UpdateDemandeDeContactPayload | UpdateEtapePayload | UpdateEvenementPayload | UpdateInformationsDemographiquePayload | UpdateLabelsEpdsTraductionPayload | UpdateLocalePayload | UpdateParcourPayload | UpdateParenthequeDocumentPayload | UpdateQuestionnaireEpdPayload | UpdateQuestionnaireEpdsTraductionPayload | UpdateReponsesEpdPayload | UpdateRolePayload | UpdateTemoignagePayload | UpdateThematiquePayload | UpdateUserPayload | UpdateVideoPayload | UpdateWidgetEpdsSourcePayload;

export type Mutation = {
  __typename?: 'Mutation';
  cartographieSuggestions?: Maybe<Scalars['Boolean']>;
  createArticle?: Maybe<CreateArticlePayload>;
  createCartographieDsType?: Maybe<CreateCartographieDsTypePayload>;
  createCartographiePoi?: Maybe<CreateCartographiePoiPayload>;
  createCartographieSource?: Maybe<CreateCartographieSourcePayload>;
  createCartographieType?: Maybe<CreateCartographieTypePayload>;
  createCommentairesEpd?: Maybe<CreateCommentairesEpdPayload>;
  createContact?: Maybe<CreateContactPayload>;
  createDemandeDeContact?: Maybe<CreateDemandeDeContactPayload>;
  createEtape?: Maybe<CreateEtapePayload>;
  createEvenement?: Maybe<CreateEvenementPayload>;
  createInformationsDemographique?: Maybe<CreateInformationsDemographiquePayload>;
  createLabelsEpdsTraduction?: Maybe<CreateLabelsEpdsTraductionPayload>;
  createLocale?: Maybe<CreateLocalePayload>;
  createParcour?: Maybe<CreateParcourPayload>;
  createParenthequeDocument?: Maybe<CreateParenthequeDocumentPayload>;
  createQuestionnaireEpd?: Maybe<CreateQuestionnaireEpdPayload>;
  createQuestionnaireEpdsTraduction?: Maybe<CreateQuestionnaireEpdsTraductionPayload>;
  createReponsesEpd?: Maybe<CreateReponsesEpdPayload>;
  createReponsesEpdsWidget?: Maybe<ReponsesEpds>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTemoignage?: Maybe<CreateTemoignagePayload>;
  createThematique?: Maybe<CreateThematiquePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createVideo?: Maybe<CreateVideoPayload>;
  createWidgetEpdsSource?: Maybe<CreateWidgetEpdsSourcePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteCartographieDsType?: Maybe<DeleteCartographieDsTypePayload>;
  deleteCartographiePoi?: Maybe<DeleteCartographiePoiPayload>;
  deleteCartographieSource?: Maybe<DeleteCartographieSourcePayload>;
  deleteCartographieType?: Maybe<DeleteCartographieTypePayload>;
  deleteCommentairesEpd?: Maybe<DeleteCommentairesEpdPayload>;
  deleteConfig?: Maybe<DeleteConfigPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  deleteDemandeDeContact?: Maybe<DeleteDemandeDeContactPayload>;
  deleteEtape?: Maybe<DeleteEtapePayload>;
  deleteEvenement?: Maybe<DeleteEvenementPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteInformationsDemographique?: Maybe<DeleteInformationsDemographiquePayload>;
  deleteLabelsEpdsTraduction?: Maybe<DeleteLabelsEpdsTraductionPayload>;
  deleteLocale?: Maybe<DeleteLocalePayload>;
  deleteParcour?: Maybe<DeleteParcourPayload>;
  deleteParenthequeDocument?: Maybe<DeleteParenthequeDocumentPayload>;
  deleteQuestionnaireEpd?: Maybe<DeleteQuestionnaireEpdPayload>;
  deleteQuestionnaireEpdsTraduction?: Maybe<DeleteQuestionnaireEpdsTraductionPayload>;
  deleteReponsesEpd?: Maybe<DeleteReponsesEpdPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTemoignage?: Maybe<DeleteTemoignagePayload>;
  deleteThematique?: Maybe<DeleteThematiquePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVideo?: Maybe<DeleteVideoPayload>;
  deleteWidgetEpdsSource?: Maybe<DeleteWidgetEpdsSourcePayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  epdsContact?: Maybe<Scalars['Boolean']>;
  epdsContactConfirmed?: Maybe<Scalars['Boolean']>;
  epdsPartage?: Maybe<Scalars['Boolean']>;
  epdsPartageEntourage?: Maybe<Scalars['Boolean']>;
  epdsPartagePourSoiMeme?: Maybe<Scalars['Boolean']>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  partageRessourcesParMail?: Maybe<Scalars['Boolean']>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateCartographieDsType?: Maybe<UpdateCartographieDsTypePayload>;
  updateCartographiePoi?: Maybe<UpdateCartographiePoiPayload>;
  updateCartographieSource?: Maybe<UpdateCartographieSourcePayload>;
  updateCartographieType?: Maybe<UpdateCartographieTypePayload>;
  updateCommentairesEpd?: Maybe<UpdateCommentairesEpdPayload>;
  updateConfig?: Maybe<UpdateConfigPayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  updateDemandeDeContact?: Maybe<UpdateDemandeDeContactPayload>;
  updateEtape?: Maybe<UpdateEtapePayload>;
  updateEvenement?: Maybe<UpdateEvenementPayload>;
  updateFileInfo: UploadFile;
  updateInformationsDemographique?: Maybe<UpdateInformationsDemographiquePayload>;
  updateLabelsEpdsTraduction?: Maybe<UpdateLabelsEpdsTraductionPayload>;
  updateLocale?: Maybe<UpdateLocalePayload>;
  updateParcour?: Maybe<UpdateParcourPayload>;
  updateParenthequeDocument?: Maybe<UpdateParenthequeDocumentPayload>;
  updateQuestionnaireEpd?: Maybe<UpdateQuestionnaireEpdPayload>;
  updateQuestionnaireEpdsTraduction?: Maybe<UpdateQuestionnaireEpdsTraductionPayload>;
  updateReponsesEpd?: Maybe<UpdateReponsesEpdPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTemoignage?: Maybe<UpdateTemoignagePayload>;
  updateThematique?: Maybe<UpdateThematiquePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateVideo?: Maybe<UpdateVideoPayload>;
  updateWidgetEpdsSource?: Maybe<UpdateWidgetEpdsSourcePayload>;
  upload: UploadFile;
};


export type MutationCartographieSuggestionsArgs = {
  code_postal: Scalars['String'];
  nombre_enfants: Scalars['Int'];
  nouveaux_pois?: InputMaybe<Scalars['String']>;
  suggestions_ameliorations?: InputMaybe<Scalars['String']>;
};


export type MutationCreateArticleArgs = {
  input?: InputMaybe<CreateArticleInput>;
};


export type MutationCreateCartographieDsTypeArgs = {
  input?: InputMaybe<CreateCartographieDsTypeInput>;
};


export type MutationCreateCartographiePoiArgs = {
  input?: InputMaybe<CreateCartographiePoiInput>;
};


export type MutationCreateCartographieSourceArgs = {
  input?: InputMaybe<CreateCartographieSourceInput>;
};


export type MutationCreateCartographieTypeArgs = {
  input?: InputMaybe<CreateCartographieTypeInput>;
};


export type MutationCreateCommentairesEpdArgs = {
  input?: InputMaybe<CreateCommentairesEpdInput>;
};


export type MutationCreateContactArgs = {
  input?: InputMaybe<CreateContactInput>;
};


export type MutationCreateDemandeDeContactArgs = {
  input?: InputMaybe<CreateDemandeDeContactInput>;
};


export type MutationCreateEtapeArgs = {
  input?: InputMaybe<CreateEtapeInput>;
};


export type MutationCreateEvenementArgs = {
  input?: InputMaybe<CreateEvenementInput>;
};


export type MutationCreateInformationsDemographiqueArgs = {
  input?: InputMaybe<CreateInformationsDemographiqueInput>;
};


export type MutationCreateLabelsEpdsTraductionArgs = {
  input?: InputMaybe<CreateLabelsEpdsTraductionInput>;
};


export type MutationCreateLocaleArgs = {
  input?: InputMaybe<CreateLocaleInput>;
};


export type MutationCreateParcourArgs = {
  input?: InputMaybe<CreateParcourInput>;
};


export type MutationCreateParenthequeDocumentArgs = {
  input?: InputMaybe<CreateParenthequeDocumentInput>;
};


export type MutationCreateQuestionnaireEpdArgs = {
  input?: InputMaybe<CreateQuestionnaireEpdInput>;
};


export type MutationCreateQuestionnaireEpdsTraductionArgs = {
  input?: InputMaybe<CreateQuestionnaireEpdsTraductionInput>;
};


export type MutationCreateReponsesEpdArgs = {
  input?: InputMaybe<CreateReponsesEpdInput>;
};


export type MutationCreateReponsesEpdsWidgetArgs = {
  compteur?: InputMaybe<Scalars['Int']>;
  genre?: InputMaybe<Enum_Reponsesepds_Genre>;
  langue?: InputMaybe<Scalars['ID']>;
  reponse_1?: InputMaybe<Scalars['Int']>;
  reponse_2?: InputMaybe<Scalars['Int']>;
  reponse_3?: InputMaybe<Scalars['Int']>;
  reponse_4?: InputMaybe<Scalars['Int']>;
  reponse_5?: InputMaybe<Scalars['Int']>;
  reponse_6?: InputMaybe<Scalars['Int']>;
  reponse_7?: InputMaybe<Scalars['Int']>;
  reponse_8?: InputMaybe<Scalars['Int']>;
  reponse_9?: InputMaybe<Scalars['Int']>;
  reponse_10?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Enum_Reponsesepds_Source>;
  source_widget_nom: Scalars['String'];
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTemoignageArgs = {
  input?: InputMaybe<CreateTemoignageInput>;
};


export type MutationCreateThematiqueArgs = {
  input?: InputMaybe<CreateThematiqueInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateVideoArgs = {
  input?: InputMaybe<CreateVideoInput>;
};


export type MutationCreateWidgetEpdsSourceArgs = {
  input?: InputMaybe<CreateWidgetEpdsSourceInput>;
};


export type MutationDeleteArticleArgs = {
  input?: InputMaybe<DeleteArticleInput>;
};


export type MutationDeleteCartographieDsTypeArgs = {
  input?: InputMaybe<DeleteCartographieDsTypeInput>;
};


export type MutationDeleteCartographiePoiArgs = {
  input?: InputMaybe<DeleteCartographiePoiInput>;
};


export type MutationDeleteCartographieSourceArgs = {
  input?: InputMaybe<DeleteCartographieSourceInput>;
};


export type MutationDeleteCartographieTypeArgs = {
  input?: InputMaybe<DeleteCartographieTypeInput>;
};


export type MutationDeleteCommentairesEpdArgs = {
  input?: InputMaybe<DeleteCommentairesEpdInput>;
};


export type MutationDeleteContactArgs = {
  input?: InputMaybe<DeleteContactInput>;
};


export type MutationDeleteDemandeDeContactArgs = {
  input?: InputMaybe<DeleteDemandeDeContactInput>;
};


export type MutationDeleteEtapeArgs = {
  input?: InputMaybe<DeleteEtapeInput>;
};


export type MutationDeleteEvenementArgs = {
  input?: InputMaybe<DeleteEvenementInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteInformationsDemographiqueArgs = {
  input?: InputMaybe<DeleteInformationsDemographiqueInput>;
};


export type MutationDeleteLabelsEpdsTraductionArgs = {
  input?: InputMaybe<DeleteLabelsEpdsTraductionInput>;
};


export type MutationDeleteLocaleArgs = {
  input?: InputMaybe<DeleteLocaleInput>;
};


export type MutationDeleteParcourArgs = {
  input?: InputMaybe<DeleteParcourInput>;
};


export type MutationDeleteParenthequeDocumentArgs = {
  input?: InputMaybe<DeleteParenthequeDocumentInput>;
};


export type MutationDeleteQuestionnaireEpdArgs = {
  input?: InputMaybe<DeleteQuestionnaireEpdInput>;
};


export type MutationDeleteQuestionnaireEpdsTraductionArgs = {
  input?: InputMaybe<DeleteQuestionnaireEpdsTraductionInput>;
};


export type MutationDeleteReponsesEpdArgs = {
  input?: InputMaybe<DeleteReponsesEpdInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTemoignageArgs = {
  input?: InputMaybe<DeleteTemoignageInput>;
};


export type MutationDeleteThematiqueArgs = {
  input?: InputMaybe<DeleteThematiqueInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteVideoArgs = {
  input?: InputMaybe<DeleteVideoInput>;
};


export type MutationDeleteWidgetEpdsSourceArgs = {
  input?: InputMaybe<DeleteWidgetEpdsSourceInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationEpdsContactArgs = {
  email?: InputMaybe<Scalars['String']>;
  horaires?: InputMaybe<Scalars['String']>;
  moyen?: InputMaybe<Scalars['String']>;
  naissance_dernier_enfant?: InputMaybe<Scalars['String']>;
  nombre_enfants?: InputMaybe<Scalars['Int']>;
  prenom?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
};


export type MutationEpdsContactConfirmedArgs = {
  email?: InputMaybe<Scalars['String']>;
  prenom?: InputMaybe<Scalars['String']>;
};


export type MutationEpdsPartageArgs = {
  detail_questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detail_reponses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detail_score?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_pro: Scalars['String'];
  email_pro_secondaire?: InputMaybe<Scalars['String']>;
  id_reponses?: InputMaybe<Scalars['String']>;
  nom?: InputMaybe<Scalars['String']>;
  prenom?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
};


export type MutationEpdsPartageEntourageArgs = {
  date?: InputMaybe<Scalars['String']>;
  detail_questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detail_reponses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email: Scalars['String'];
  mood_level?: InputMaybe<Scalars['String']>;
  prenom?: InputMaybe<Scalars['String']>;
};


export type MutationEpdsPartagePourSoiMemeArgs = {
  date?: InputMaybe<Scalars['String']>;
  detail_questions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  detail_reponses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email: Scalars['String'];
  mood_level?: InputMaybe<Scalars['String']>;
  prenom?: InputMaybe<Scalars['String']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationPartageRessourcesParMailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticleInput>;
};


export type MutationUpdateCartographieDsTypeArgs = {
  input?: InputMaybe<UpdateCartographieDsTypeInput>;
};


export type MutationUpdateCartographiePoiArgs = {
  input?: InputMaybe<UpdateCartographiePoiInput>;
};


export type MutationUpdateCartographieSourceArgs = {
  input?: InputMaybe<UpdateCartographieSourceInput>;
};


export type MutationUpdateCartographieTypeArgs = {
  input?: InputMaybe<UpdateCartographieTypeInput>;
};


export type MutationUpdateCommentairesEpdArgs = {
  input?: InputMaybe<UpdateCommentairesEpdInput>;
};


export type MutationUpdateConfigArgs = {
  input?: InputMaybe<UpdateConfigInput>;
};


export type MutationUpdateContactArgs = {
  input?: InputMaybe<UpdateContactInput>;
};


export type MutationUpdateDemandeDeContactArgs = {
  input?: InputMaybe<UpdateDemandeDeContactInput>;
};


export type MutationUpdateEtapeArgs = {
  input?: InputMaybe<UpdateEtapeInput>;
};


export type MutationUpdateEvenementArgs = {
  input?: InputMaybe<UpdateEvenementInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateInformationsDemographiqueArgs = {
  input?: InputMaybe<UpdateInformationsDemographiqueInput>;
};


export type MutationUpdateLabelsEpdsTraductionArgs = {
  input?: InputMaybe<UpdateLabelsEpdsTraductionInput>;
};


export type MutationUpdateLocaleArgs = {
  input?: InputMaybe<UpdateLocaleInput>;
};


export type MutationUpdateParcourArgs = {
  input?: InputMaybe<UpdateParcourInput>;
};


export type MutationUpdateParenthequeDocumentArgs = {
  input?: InputMaybe<UpdateParenthequeDocumentInput>;
};


export type MutationUpdateQuestionnaireEpdArgs = {
  input?: InputMaybe<UpdateQuestionnaireEpdInput>;
};


export type MutationUpdateQuestionnaireEpdsTraductionArgs = {
  input?: InputMaybe<UpdateQuestionnaireEpdsTraductionInput>;
};


export type MutationUpdateReponsesEpdArgs = {
  input?: InputMaybe<UpdateReponsesEpdInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTemoignageArgs = {
  input?: InputMaybe<UpdateTemoignageInput>;
};


export type MutationUpdateThematiqueArgs = {
  input?: InputMaybe<UpdateThematiqueInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateVideoArgs = {
  input?: InputMaybe<UpdateVideoInput>;
};


export type MutationUpdateWidgetEpdsSourceArgs = {
  input?: InputMaybe<UpdateWidgetEpdsSourceInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type ParcourInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nom?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Parcours = {
  __typename?: 'Parcours';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type ParcoursEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ParcoursAggregator = {
  __typename?: 'ParcoursAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ParcoursConnection = {
  __typename?: 'ParcoursConnection';
  aggregate?: Maybe<ParcoursAggregator>;
  groupBy?: Maybe<ParcoursGroupBy>;
  values?: Maybe<Array<Maybe<Parcours>>>;
};

export type ParcoursConnectionCreated_At = {
  __typename?: 'ParcoursConnectionCreated_at';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParcoursConnectionDescription = {
  __typename?: 'ParcoursConnectionDescription';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ParcoursConnectionId = {
  __typename?: 'ParcoursConnectionId';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ParcoursConnectionNom = {
  __typename?: 'ParcoursConnectionNom';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ParcoursConnectionPublished_At = {
  __typename?: 'ParcoursConnectionPublished_at';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParcoursConnectionUpdated_At = {
  __typename?: 'ParcoursConnectionUpdated_at';
  connection?: Maybe<ParcoursConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParcoursGroupBy = {
  __typename?: 'ParcoursGroupBy';
  created_at?: Maybe<Array<Maybe<ParcoursConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ParcoursConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ParcoursConnectionId>>>;
  nom?: Maybe<Array<Maybe<ParcoursConnectionNom>>>;
  published_at?: Maybe<Array<Maybe<ParcoursConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ParcoursConnectionUpdated_At>>>;
};

export type ParenthequeDocumentInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fichier?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ParenthequeDocuments = {
  __typename?: 'ParenthequeDocuments';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  fichier?: Maybe<UploadFile>;
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  ordre?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  thematique?: Maybe<Thematique>;
  updated_at: Scalars['DateTime'];
};


export type ParenthequeDocumentsEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ParenthequeDocumentsEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ParenthequeDocumentsAggregator = {
  __typename?: 'ParenthequeDocumentsAggregator';
  avg?: Maybe<ParenthequeDocumentsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ParenthequeDocumentsAggregatorMax>;
  min?: Maybe<ParenthequeDocumentsAggregatorMin>;
  sum?: Maybe<ParenthequeDocumentsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ParenthequeDocumentsAggregatorAvg = {
  __typename?: 'ParenthequeDocumentsAggregatorAvg';
  ordre?: Maybe<Scalars['Float']>;
};

export type ParenthequeDocumentsAggregatorMax = {
  __typename?: 'ParenthequeDocumentsAggregatorMax';
  ordre?: Maybe<Scalars['Float']>;
};

export type ParenthequeDocumentsAggregatorMin = {
  __typename?: 'ParenthequeDocumentsAggregatorMin';
  ordre?: Maybe<Scalars['Float']>;
};

export type ParenthequeDocumentsAggregatorSum = {
  __typename?: 'ParenthequeDocumentsAggregatorSum';
  ordre?: Maybe<Scalars['Float']>;
};

export type ParenthequeDocumentsConnection = {
  __typename?: 'ParenthequeDocumentsConnection';
  aggregate?: Maybe<ParenthequeDocumentsAggregator>;
  groupBy?: Maybe<ParenthequeDocumentsGroupBy>;
  values?: Maybe<Array<Maybe<ParenthequeDocuments>>>;
};

export type ParenthequeDocumentsConnectionCreated_At = {
  __typename?: 'ParenthequeDocumentsConnectionCreated_at';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParenthequeDocumentsConnectionDescription = {
  __typename?: 'ParenthequeDocumentsConnectionDescription';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ParenthequeDocumentsConnectionFichier = {
  __typename?: 'ParenthequeDocumentsConnectionFichier';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ParenthequeDocumentsConnectionId = {
  __typename?: 'ParenthequeDocumentsConnectionId';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ParenthequeDocumentsConnectionNom = {
  __typename?: 'ParenthequeDocumentsConnectionNom';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ParenthequeDocumentsConnectionOrdre = {
  __typename?: 'ParenthequeDocumentsConnectionOrdre';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ParenthequeDocumentsConnectionPublished_At = {
  __typename?: 'ParenthequeDocumentsConnectionPublished_at';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParenthequeDocumentsConnectionThematique = {
  __typename?: 'ParenthequeDocumentsConnectionThematique';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ParenthequeDocumentsConnectionUpdated_At = {
  __typename?: 'ParenthequeDocumentsConnectionUpdated_at';
  connection?: Maybe<ParenthequeDocumentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ParenthequeDocumentsGroupBy = {
  __typename?: 'ParenthequeDocumentsGroupBy';
  created_at?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionDescription>>>;
  fichier?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionFichier>>>;
  id?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionId>>>;
  nom?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionNom>>>;
  ordre?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionOrdre>>>;
  published_at?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionPublished_At>>>;
  thematique?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionThematique>>>;
  updated_at?: Maybe<Array<Maybe<ParenthequeDocumentsConnectionUpdated_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  /** Retourne un article */
  article?: Maybe<Article>;
  /** Retourne une liste d'articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  cartographieDsType?: Maybe<CartographieDsTypes>;
  cartographieDsTypes?: Maybe<Array<Maybe<CartographieDsTypes>>>;
  cartographieDsTypesConnection?: Maybe<CartographieDsTypesConnection>;
  cartographiePoi?: Maybe<CartographiePoi>;
  cartographiePois?: Maybe<Array<Maybe<CartographiePoi>>>;
  cartographiePoisConnection?: Maybe<CartographiePoiConnection>;
  cartographieSource?: Maybe<CartographieSource>;
  cartographieSources?: Maybe<Array<Maybe<CartographieSource>>>;
  cartographieSourcesConnection?: Maybe<CartographieSourceConnection>;
  cartographieType?: Maybe<CartographieTypes>;
  cartographieTypes?: Maybe<Array<Maybe<CartographieTypes>>>;
  cartographieTypesConnection?: Maybe<CartographieTypesConnection>;
  commentairesEpd?: Maybe<CommentairesEpds>;
  commentairesEpds?: Maybe<Array<Maybe<CommentairesEpds>>>;
  commentairesEpdsConnection?: Maybe<CommentairesEpdsConnection>;
  config?: Maybe<Config>;
  contact?: Maybe<Contacts>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  contactsConnection?: Maybe<ContactsConnection>;
  demandeDeContact?: Maybe<DemandeDeContact>;
  demandeDeContacts?: Maybe<Array<Maybe<DemandeDeContact>>>;
  demandeDeContactsConnection?: Maybe<DemandeDeContactConnection>;
  etape?: Maybe<Etape>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  etapesConnection?: Maybe<EtapeConnection>;
  evenement?: Maybe<Evenement>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  evenementsConnection?: Maybe<EvenementConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  getCurrentEtape?: Maybe<Etape>;
  informationsDemographique?: Maybe<InformationsDemographiques>;
  informationsDemographiques?: Maybe<Array<Maybe<InformationsDemographiques>>>;
  informationsDemographiquesConnection?: Maybe<InformationsDemographiquesConnection>;
  labelsEpdsTraduction?: Maybe<LabelsEpdsTraductions>;
  labelsEpdsTraductions?: Maybe<Array<Maybe<LabelsEpdsTraductions>>>;
  labelsEpdsTraductionsConnection?: Maybe<LabelsEpdsTraductionsConnection>;
  locale?: Maybe<Locale>;
  locales?: Maybe<Array<Maybe<Locale>>>;
  localesConnection?: Maybe<LocaleConnection>;
  me?: Maybe<UsersPermissionsMe>;
  parcour?: Maybe<Parcours>;
  parcours?: Maybe<Array<Maybe<Parcours>>>;
  parcoursConnection?: Maybe<ParcoursConnection>;
  parenthequeDocument?: Maybe<ParenthequeDocuments>;
  parenthequeDocuments?: Maybe<Array<Maybe<ParenthequeDocuments>>>;
  parenthequeDocumentsConnection?: Maybe<ParenthequeDocumentsConnection>;
  questionnaireEpd?: Maybe<QuestionnaireEpds>;
  questionnaireEpds?: Maybe<Array<Maybe<QuestionnaireEpds>>>;
  questionnaireEpdsConnection?: Maybe<QuestionnaireEpdsConnection>;
  questionnaireEpdsTraduction?: Maybe<QuestionnaireEpdsTraductions>;
  questionnaireEpdsTraductions?: Maybe<Array<Maybe<QuestionnaireEpdsTraductions>>>;
  questionnaireEpdsTraductionsConnection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  reponsesEpd?: Maybe<ReponsesEpds>;
  reponsesEpds?: Maybe<Array<Maybe<ReponsesEpds>>>;
  reponsesEpdsConnection?: Maybe<ReponsesEpdsConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  searchPois?: Maybe<Array<Maybe<CartographiePoiAdresse>>>;
  searchPoisCount?: Maybe<Scalars['Int']>;
  temoignage?: Maybe<Temoignage>;
  temoignages?: Maybe<Array<Maybe<Temoignage>>>;
  temoignagesConnection?: Maybe<TemoignageConnection>;
  thematique?: Maybe<Thematique>;
  thematiques?: Maybe<Array<Maybe<Thematique>>>;
  thematiquesConnection?: Maybe<ThematiqueConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
  videosConnection?: Maybe<VideoConnection>;
  widgetEpdsSource?: Maybe<WidgetEpdsSources>;
  widgetEpdsSources?: Maybe<Array<Maybe<WidgetEpdsSources>>>;
  widgetEpdsSourcesConnection?: Maybe<WidgetEpdsSourcesConnection>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieDsTypeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCartographieDsTypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieDsTypesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographiePoiArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCartographiePoisArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographiePoisConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieSourceArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCartographieSourcesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieSourcesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieTypeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCartographieTypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCartographieTypesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCommentairesEpdArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCommentairesEpdsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCommentairesEpdsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryConfigArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryContactsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDemandeDeContactArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDemandeDeContactsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDemandeDeContactsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEtapeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEtapesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEvenementArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEvenementsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryGetCurrentEtapeArgs = {
  infos: Informations;
};


export type QueryInformationsDemographiqueArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryInformationsDemographiquesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryInformationsDemographiquesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLabelsEpdsTraductionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLabelsEpdsTraductionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLabelsEpdsTraductionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLocaleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLocalesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLocalesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryParcourArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryParcoursArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryParcoursConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryParenthequeDocumentArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryParenthequeDocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryParenthequeDocumentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionnaireEpdArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryQuestionnaireEpdsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionnaireEpdsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionnaireEpdsTraductionArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryQuestionnaireEpdsTraductionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryQuestionnaireEpdsTraductionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryReponsesEpdArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryReponsesEpdsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryReponsesEpdsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QuerySearchPoisArgs = {
  etapes?: InputMaybe<Array<Scalars['String']>>;
  perimetre: Array<Scalars['Float']>;
  thematiques?: InputMaybe<Array<Scalars['String']>>;
  types?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySearchPoisCountArgs = {
  etapes?: InputMaybe<Array<Scalars['String']>>;
  perimetre: Array<Scalars['Float']>;
  thematiques?: InputMaybe<Array<Scalars['String']>>;
  types?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryTemoignageArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTemoignagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTemoignagesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryThematiqueArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryThematiquesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryThematiquesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVideosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWidgetEpdsSourceArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryWidgetEpdsSourcesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryWidgetEpdsSourcesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type QuestionnaireEpdInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  libelle: Scalars['String'];
  locale: Scalars['String'];
  ordre: Scalars['Int'];
  reponse_1_libelle: Scalars['String'];
  reponse_1_points: Scalars['Int'];
  reponse_2_libelle: Scalars['String'];
  reponse_2_points: Scalars['Int'];
  reponse_3_libelle: Scalars['String'];
  reponse_3_points: Scalars['Int'];
  reponse_4_libelle: Scalars['String'];
  reponse_4_points: Scalars['Int'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type QuestionnaireEpds = {
  __typename?: 'QuestionnaireEpds';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  libelle: Scalars['String'];
  locale: Scalars['String'];
  ordre: Scalars['Int'];
  reponse_1_libelle: Scalars['String'];
  reponse_1_points: Scalars['Int'];
  reponse_2_libelle: Scalars['String'];
  reponse_2_points: Scalars['Int'];
  reponse_3_libelle: Scalars['String'];
  reponse_3_points: Scalars['Int'];
  reponse_4_libelle: Scalars['String'];
  reponse_4_points: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type QuestionnaireEpdsAggregator = {
  __typename?: 'QuestionnaireEpdsAggregator';
  avg?: Maybe<QuestionnaireEpdsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestionnaireEpdsAggregatorMax>;
  min?: Maybe<QuestionnaireEpdsAggregatorMin>;
  sum?: Maybe<QuestionnaireEpdsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsAggregatorAvg = {
  __typename?: 'QuestionnaireEpdsAggregatorAvg';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsAggregatorMax = {
  __typename?: 'QuestionnaireEpdsAggregatorMax';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsAggregatorMin = {
  __typename?: 'QuestionnaireEpdsAggregatorMin';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsAggregatorSum = {
  __typename?: 'QuestionnaireEpdsAggregatorSum';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsConnection = {
  __typename?: 'QuestionnaireEpdsConnection';
  aggregate?: Maybe<QuestionnaireEpdsAggregator>;
  groupBy?: Maybe<QuestionnaireEpdsGroupBy>;
  values?: Maybe<Array<Maybe<QuestionnaireEpds>>>;
};

export type QuestionnaireEpdsConnectionCreated_At = {
  __typename?: 'QuestionnaireEpdsConnectionCreated_at';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionnaireEpdsConnectionId = {
  __typename?: 'QuestionnaireEpdsConnectionId';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionnaireEpdsConnectionLibelle = {
  __typename?: 'QuestionnaireEpdsConnectionLibelle';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionLocale = {
  __typename?: 'QuestionnaireEpdsConnectionLocale';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionOrdre = {
  __typename?: 'QuestionnaireEpdsConnectionOrdre';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsConnectionReponse_1_Libelle = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_1_libelle';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionReponse_1_Points = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_1_points';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsConnectionReponse_2_Libelle = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_2_libelle';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionReponse_2_Points = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_2_points';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsConnectionReponse_3_Libelle = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_3_libelle';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionReponse_3_Points = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_3_points';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsConnectionReponse_4_Libelle = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_4_libelle';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsConnectionReponse_4_Points = {
  __typename?: 'QuestionnaireEpdsConnectionReponse_4_points';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsConnectionUpdated_At = {
  __typename?: 'QuestionnaireEpdsConnectionUpdated_at';
  connection?: Maybe<QuestionnaireEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionnaireEpdsGroupBy = {
  __typename?: 'QuestionnaireEpdsGroupBy';
  created_at?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionId>>>;
  libelle?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionLibelle>>>;
  locale?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionLocale>>>;
  ordre?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionOrdre>>>;
  reponse_1_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_1_Libelle>>>;
  reponse_1_points?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_1_Points>>>;
  reponse_2_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_2_Libelle>>>;
  reponse_2_points?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_2_Points>>>;
  reponse_3_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_3_Libelle>>>;
  reponse_3_points?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_3_Points>>>;
  reponse_4_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_4_Libelle>>>;
  reponse_4_points?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionReponse_4_Points>>>;
  updated_at?: Maybe<Array<Maybe<QuestionnaireEpdsConnectionUpdated_At>>>;
};

export type QuestionnaireEpdsTraductionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  langue?: InputMaybe<Scalars['ID']>;
  libelle: Scalars['String'];
  ordre: Scalars['Int'];
  reponse_1_libelle: Scalars['String'];
  reponse_1_points: Scalars['Int'];
  reponse_2_libelle: Scalars['String'];
  reponse_2_points: Scalars['Int'];
  reponse_3_libelle: Scalars['String'];
  reponse_3_points: Scalars['Int'];
  reponse_4_libelle: Scalars['String'];
  reponse_4_points: Scalars['Int'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type QuestionnaireEpdsTraductions = {
  __typename?: 'QuestionnaireEpdsTraductions';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  langue?: Maybe<Locale>;
  libelle: Scalars['String'];
  ordre: Scalars['Int'];
  reponse_1_libelle: Scalars['String'];
  reponse_1_points: Scalars['Int'];
  reponse_2_libelle: Scalars['String'];
  reponse_2_points: Scalars['Int'];
  reponse_3_libelle: Scalars['String'];
  reponse_3_points: Scalars['Int'];
  reponse_4_libelle: Scalars['String'];
  reponse_4_points: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type QuestionnaireEpdsTraductionsAggregator = {
  __typename?: 'QuestionnaireEpdsTraductionsAggregator';
  avg?: Maybe<QuestionnaireEpdsTraductionsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<QuestionnaireEpdsTraductionsAggregatorMax>;
  min?: Maybe<QuestionnaireEpdsTraductionsAggregatorMin>;
  sum?: Maybe<QuestionnaireEpdsTraductionsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsAggregatorAvg = {
  __typename?: 'QuestionnaireEpdsTraductionsAggregatorAvg';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsTraductionsAggregatorMax = {
  __typename?: 'QuestionnaireEpdsTraductionsAggregatorMax';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsTraductionsAggregatorMin = {
  __typename?: 'QuestionnaireEpdsTraductionsAggregatorMin';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsTraductionsAggregatorSum = {
  __typename?: 'QuestionnaireEpdsTraductionsAggregatorSum';
  ordre?: Maybe<Scalars['Float']>;
  reponse_1_points?: Maybe<Scalars['Float']>;
  reponse_2_points?: Maybe<Scalars['Float']>;
  reponse_3_points?: Maybe<Scalars['Float']>;
  reponse_4_points?: Maybe<Scalars['Float']>;
};

export type QuestionnaireEpdsTraductionsConnection = {
  __typename?: 'QuestionnaireEpdsTraductionsConnection';
  aggregate?: Maybe<QuestionnaireEpdsTraductionsAggregator>;
  groupBy?: Maybe<QuestionnaireEpdsTraductionsGroupBy>;
  values?: Maybe<Array<Maybe<QuestionnaireEpdsTraductions>>>;
};

export type QuestionnaireEpdsTraductionsConnectionCreated_At = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionCreated_at';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionnaireEpdsTraductionsConnectionId = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionId';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionnaireEpdsTraductionsConnectionLangue = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionLangue';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type QuestionnaireEpdsTraductionsConnectionLibelle = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionLibelle';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsTraductionsConnectionOrdre = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionOrdre';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_1_Libelle = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_1_libelle';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_1_Points = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_1_points';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_2_Libelle = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_2_libelle';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_2_Points = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_2_points';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_3_Libelle = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_3_libelle';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_3_Points = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_3_points';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_4_Libelle = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_4_libelle';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type QuestionnaireEpdsTraductionsConnectionReponse_4_Points = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionReponse_4_points';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type QuestionnaireEpdsTraductionsConnectionUpdated_At = {
  __typename?: 'QuestionnaireEpdsTraductionsConnectionUpdated_at';
  connection?: Maybe<QuestionnaireEpdsTraductionsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type QuestionnaireEpdsTraductionsGroupBy = {
  __typename?: 'QuestionnaireEpdsTraductionsGroupBy';
  created_at?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionId>>>;
  langue?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionLangue>>>;
  libelle?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionLibelle>>>;
  ordre?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionOrdre>>>;
  reponse_1_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_1_Libelle>>>;
  reponse_1_points?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_1_Points>>>;
  reponse_2_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_2_Libelle>>>;
  reponse_2_points?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_2_Points>>>;
  reponse_3_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_3_Libelle>>>;
  reponse_3_points?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_3_Points>>>;
  reponse_4_libelle?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_4_Libelle>>>;
  reponse_4_points?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionReponse_4_Points>>>;
  updated_at?: Maybe<Array<Maybe<QuestionnaireEpdsTraductionsConnectionUpdated_At>>>;
};

export type ReponsesEpdInput = {
  compteur?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  genre?: InputMaybe<Enum_Reponsesepds_Genre>;
  langue?: InputMaybe<Scalars['ID']>;
  reponse_1?: InputMaybe<Scalars['Int']>;
  reponse_2?: InputMaybe<Scalars['Int']>;
  reponse_3?: InputMaybe<Scalars['Int']>;
  reponse_4?: InputMaybe<Scalars['Int']>;
  reponse_5?: InputMaybe<Scalars['Int']>;
  reponse_6?: InputMaybe<Scalars['Int']>;
  reponse_7?: InputMaybe<Scalars['Int']>;
  reponse_8?: InputMaybe<Scalars['Int']>;
  reponse_9?: InputMaybe<Scalars['Int']>;
  reponse_10?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Enum_Reponsesepds_Source>;
  source_widget?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ReponsesEpds = {
  __typename?: 'ReponsesEpds';
  compteur?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  genre?: Maybe<Enum_Reponsesepds_Genre>;
  id: Scalars['ID'];
  langue?: Maybe<Locale>;
  reponse_1?: Maybe<Scalars['Int']>;
  reponse_2?: Maybe<Scalars['Int']>;
  reponse_3?: Maybe<Scalars['Int']>;
  reponse_4?: Maybe<Scalars['Int']>;
  reponse_5?: Maybe<Scalars['Int']>;
  reponse_6?: Maybe<Scalars['Int']>;
  reponse_7?: Maybe<Scalars['Int']>;
  reponse_8?: Maybe<Scalars['Int']>;
  reponse_9?: Maybe<Scalars['Int']>;
  reponse_10?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  source?: Maybe<Enum_Reponsesepds_Source>;
  source_widget?: Maybe<WidgetEpdsSources>;
  updated_at: Scalars['DateTime'];
};

export type ReponsesEpdsAggregator = {
  __typename?: 'ReponsesEpdsAggregator';
  avg?: Maybe<ReponsesEpdsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ReponsesEpdsAggregatorMax>;
  min?: Maybe<ReponsesEpdsAggregatorMin>;
  sum?: Maybe<ReponsesEpdsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsAggregatorAvg = {
  __typename?: 'ReponsesEpdsAggregatorAvg';
  compteur?: Maybe<Scalars['Float']>;
  reponse_1?: Maybe<Scalars['Float']>;
  reponse_2?: Maybe<Scalars['Float']>;
  reponse_3?: Maybe<Scalars['Float']>;
  reponse_4?: Maybe<Scalars['Float']>;
  reponse_5?: Maybe<Scalars['Float']>;
  reponse_6?: Maybe<Scalars['Float']>;
  reponse_7?: Maybe<Scalars['Float']>;
  reponse_8?: Maybe<Scalars['Float']>;
  reponse_9?: Maybe<Scalars['Float']>;
  reponse_10?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type ReponsesEpdsAggregatorMax = {
  __typename?: 'ReponsesEpdsAggregatorMax';
  compteur?: Maybe<Scalars['Float']>;
  reponse_1?: Maybe<Scalars['Float']>;
  reponse_2?: Maybe<Scalars['Float']>;
  reponse_3?: Maybe<Scalars['Float']>;
  reponse_4?: Maybe<Scalars['Float']>;
  reponse_5?: Maybe<Scalars['Float']>;
  reponse_6?: Maybe<Scalars['Float']>;
  reponse_7?: Maybe<Scalars['Float']>;
  reponse_8?: Maybe<Scalars['Float']>;
  reponse_9?: Maybe<Scalars['Float']>;
  reponse_10?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type ReponsesEpdsAggregatorMin = {
  __typename?: 'ReponsesEpdsAggregatorMin';
  compteur?: Maybe<Scalars['Float']>;
  reponse_1?: Maybe<Scalars['Float']>;
  reponse_2?: Maybe<Scalars['Float']>;
  reponse_3?: Maybe<Scalars['Float']>;
  reponse_4?: Maybe<Scalars['Float']>;
  reponse_5?: Maybe<Scalars['Float']>;
  reponse_6?: Maybe<Scalars['Float']>;
  reponse_7?: Maybe<Scalars['Float']>;
  reponse_8?: Maybe<Scalars['Float']>;
  reponse_9?: Maybe<Scalars['Float']>;
  reponse_10?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type ReponsesEpdsAggregatorSum = {
  __typename?: 'ReponsesEpdsAggregatorSum';
  compteur?: Maybe<Scalars['Float']>;
  reponse_1?: Maybe<Scalars['Float']>;
  reponse_2?: Maybe<Scalars['Float']>;
  reponse_3?: Maybe<Scalars['Float']>;
  reponse_4?: Maybe<Scalars['Float']>;
  reponse_5?: Maybe<Scalars['Float']>;
  reponse_6?: Maybe<Scalars['Float']>;
  reponse_7?: Maybe<Scalars['Float']>;
  reponse_8?: Maybe<Scalars['Float']>;
  reponse_9?: Maybe<Scalars['Float']>;
  reponse_10?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type ReponsesEpdsConnection = {
  __typename?: 'ReponsesEpdsConnection';
  aggregate?: Maybe<ReponsesEpdsAggregator>;
  groupBy?: Maybe<ReponsesEpdsGroupBy>;
  values?: Maybe<Array<Maybe<ReponsesEpds>>>;
};

export type ReponsesEpdsConnectionCompteur = {
  __typename?: 'ReponsesEpdsConnectionCompteur';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionCreated_At = {
  __typename?: 'ReponsesEpdsConnectionCreated_at';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ReponsesEpdsConnectionGenre = {
  __typename?: 'ReponsesEpdsConnectionGenre';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ReponsesEpdsConnectionId = {
  __typename?: 'ReponsesEpdsConnectionId';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ReponsesEpdsConnectionLangue = {
  __typename?: 'ReponsesEpdsConnectionLangue';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ReponsesEpdsConnectionReponse_1 = {
  __typename?: 'ReponsesEpdsConnectionReponse_1';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_2 = {
  __typename?: 'ReponsesEpdsConnectionReponse_2';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_3 = {
  __typename?: 'ReponsesEpdsConnectionReponse_3';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_4 = {
  __typename?: 'ReponsesEpdsConnectionReponse_4';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_5 = {
  __typename?: 'ReponsesEpdsConnectionReponse_5';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_6 = {
  __typename?: 'ReponsesEpdsConnectionReponse_6';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_7 = {
  __typename?: 'ReponsesEpdsConnectionReponse_7';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_8 = {
  __typename?: 'ReponsesEpdsConnectionReponse_8';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_9 = {
  __typename?: 'ReponsesEpdsConnectionReponse_9';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionReponse_10 = {
  __typename?: 'ReponsesEpdsConnectionReponse_10';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionScore = {
  __typename?: 'ReponsesEpdsConnectionScore';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type ReponsesEpdsConnectionSource = {
  __typename?: 'ReponsesEpdsConnectionSource';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ReponsesEpdsConnectionSource_Widget = {
  __typename?: 'ReponsesEpdsConnectionSource_widget';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ReponsesEpdsConnectionUpdated_At = {
  __typename?: 'ReponsesEpdsConnectionUpdated_at';
  connection?: Maybe<ReponsesEpdsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ReponsesEpdsGroupBy = {
  __typename?: 'ReponsesEpdsGroupBy';
  compteur?: Maybe<Array<Maybe<ReponsesEpdsConnectionCompteur>>>;
  created_at?: Maybe<Array<Maybe<ReponsesEpdsConnectionCreated_At>>>;
  genre?: Maybe<Array<Maybe<ReponsesEpdsConnectionGenre>>>;
  id?: Maybe<Array<Maybe<ReponsesEpdsConnectionId>>>;
  langue?: Maybe<Array<Maybe<ReponsesEpdsConnectionLangue>>>;
  reponse_1?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_1>>>;
  reponse_2?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_2>>>;
  reponse_3?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_3>>>;
  reponse_4?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_4>>>;
  reponse_5?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_5>>>;
  reponse_6?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_6>>>;
  reponse_7?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_7>>>;
  reponse_8?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_8>>>;
  reponse_9?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_9>>>;
  reponse_10?: Maybe<Array<Maybe<ReponsesEpdsConnectionReponse_10>>>;
  score?: Maybe<Array<Maybe<ReponsesEpdsConnectionScore>>>;
  source?: Maybe<Array<Maybe<ReponsesEpdsConnectionSource>>>;
  source_widget?: Maybe<Array<Maybe<ReponsesEpdsConnectionSource_Widget>>>;
  updated_at?: Maybe<Array<Maybe<ReponsesEpdsConnectionUpdated_At>>>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Témoignages et chiffres chocs permettant de convaincre le parent de passer le test EPDS */
export type Temoignage = {
  __typename?: 'Temoignage';
  chiffre_choc?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  texte: Scalars['String'];
  titre?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type TemoignageAggregator = {
  __typename?: 'TemoignageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TemoignageConnection = {
  __typename?: 'TemoignageConnection';
  aggregate?: Maybe<TemoignageAggregator>;
  groupBy?: Maybe<TemoignageGroupBy>;
  values?: Maybe<Array<Maybe<Temoignage>>>;
};

export type TemoignageConnectionChiffre_Choc = {
  __typename?: 'TemoignageConnectionChiffre_choc';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type TemoignageConnectionCreated_At = {
  __typename?: 'TemoignageConnectionCreated_at';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TemoignageConnectionId = {
  __typename?: 'TemoignageConnectionId';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TemoignageConnectionPublished_At = {
  __typename?: 'TemoignageConnectionPublished_at';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TemoignageConnectionSource = {
  __typename?: 'TemoignageConnectionSource';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TemoignageConnectionTexte = {
  __typename?: 'TemoignageConnectionTexte';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TemoignageConnectionTitre = {
  __typename?: 'TemoignageConnectionTitre';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TemoignageConnectionUpdated_At = {
  __typename?: 'TemoignageConnectionUpdated_at';
  connection?: Maybe<TemoignageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TemoignageGroupBy = {
  __typename?: 'TemoignageGroupBy';
  chiffre_choc?: Maybe<Array<Maybe<TemoignageConnectionChiffre_Choc>>>;
  created_at?: Maybe<Array<Maybe<TemoignageConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TemoignageConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TemoignageConnectionPublished_At>>>;
  source?: Maybe<Array<Maybe<TemoignageConnectionSource>>>;
  texte?: Maybe<Array<Maybe<TemoignageConnectionTexte>>>;
  titre?: Maybe<Array<Maybe<TemoignageConnectionTitre>>>;
  updated_at?: Maybe<Array<Maybe<TemoignageConnectionUpdated_At>>>;
};

export type TemoignageInput = {
  chiffre_choc?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  texte: Scalars['String'];
  titre?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Thematique = {
  __typename?: 'Thematique';
  articles?: Maybe<Array<Maybe<Article>>>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  parentheque_documents?: Maybe<Array<Maybe<ParenthequeDocuments>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type ThematiqueArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ThematiqueEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ThematiqueEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ThematiqueParentheque_DocumentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type ThematiqueVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ThematiqueAggregator = {
  __typename?: 'ThematiqueAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ThematiqueConnection = {
  __typename?: 'ThematiqueConnection';
  aggregate?: Maybe<ThematiqueAggregator>;
  groupBy?: Maybe<ThematiqueGroupBy>;
  values?: Maybe<Array<Maybe<Thematique>>>;
};

export type ThematiqueConnectionCreated_At = {
  __typename?: 'ThematiqueConnectionCreated_at';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ThematiqueConnectionDescription = {
  __typename?: 'ThematiqueConnectionDescription';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ThematiqueConnectionId = {
  __typename?: 'ThematiqueConnectionId';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ThematiqueConnectionNom = {
  __typename?: 'ThematiqueConnectionNom';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ThematiqueConnectionPublished_At = {
  __typename?: 'ThematiqueConnectionPublished_at';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ThematiqueConnectionUpdated_At = {
  __typename?: 'ThematiqueConnectionUpdated_at';
  connection?: Maybe<ThematiqueConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ThematiqueGroupBy = {
  __typename?: 'ThematiqueGroupBy';
  created_at?: Maybe<Array<Maybe<ThematiqueConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ThematiqueConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ThematiqueConnectionId>>>;
  nom?: Maybe<Array<Maybe<ThematiqueConnectionNom>>>;
  published_at?: Maybe<Array<Maybe<ThematiqueConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ThematiqueConnectionUpdated_At>>>;
};

export type ThematiqueInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nom?: InputMaybe<Scalars['String']>;
  parentheque_documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Video = {
  __typename?: 'Video';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  etapes?: Maybe<Array<Maybe<Etape>>>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  id: Scalars['ID'];
  miniature?: Maybe<UploadFile>;
  nom?: Maybe<Scalars['String']>;
  ordre?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  thematique?: Maybe<Thematique>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type VideoEtapesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type VideoEvenementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type VideoAggregator = {
  __typename?: 'VideoAggregator';
  avg?: Maybe<VideoAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<VideoAggregatorMax>;
  min?: Maybe<VideoAggregatorMin>;
  sum?: Maybe<VideoAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VideoAggregatorAvg = {
  __typename?: 'VideoAggregatorAvg';
  ordre?: Maybe<Scalars['Float']>;
};

export type VideoAggregatorMax = {
  __typename?: 'VideoAggregatorMax';
  ordre?: Maybe<Scalars['Float']>;
};

export type VideoAggregatorMin = {
  __typename?: 'VideoAggregatorMin';
  ordre?: Maybe<Scalars['Float']>;
};

export type VideoAggregatorSum = {
  __typename?: 'VideoAggregatorSum';
  ordre?: Maybe<Scalars['Float']>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  aggregate?: Maybe<VideoAggregator>;
  groupBy?: Maybe<VideoGroupBy>;
  values?: Maybe<Array<Maybe<Video>>>;
};

export type VideoConnectionCreated_At = {
  __typename?: 'VideoConnectionCreated_at';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type VideoConnectionDescription = {
  __typename?: 'VideoConnectionDescription';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoConnectionId = {
  __typename?: 'VideoConnectionId';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionMiniature = {
  __typename?: 'VideoConnectionMiniature';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionNom = {
  __typename?: 'VideoConnectionNom';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoConnectionOrdre = {
  __typename?: 'VideoConnectionOrdre';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type VideoConnectionPublished_At = {
  __typename?: 'VideoConnectionPublished_at';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type VideoConnectionThematique = {
  __typename?: 'VideoConnectionThematique';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionUpdated_At = {
  __typename?: 'VideoConnectionUpdated_at';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type VideoConnectionUrl = {
  __typename?: 'VideoConnectionUrl';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoGroupBy = {
  __typename?: 'VideoGroupBy';
  created_at?: Maybe<Array<Maybe<VideoConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<VideoConnectionDescription>>>;
  id?: Maybe<Array<Maybe<VideoConnectionId>>>;
  miniature?: Maybe<Array<Maybe<VideoConnectionMiniature>>>;
  nom?: Maybe<Array<Maybe<VideoConnectionNom>>>;
  ordre?: Maybe<Array<Maybe<VideoConnectionOrdre>>>;
  published_at?: Maybe<Array<Maybe<VideoConnectionPublished_At>>>;
  thematique?: Maybe<Array<Maybe<VideoConnectionThematique>>>;
  updated_at?: Maybe<Array<Maybe<VideoConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<VideoConnectionUrl>>>;
};

export type VideoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  miniature?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type WidgetEpdsSourceInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  nom: Scalars['String'];
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type WidgetEpdsSources = {
  __typename?: 'WidgetEpdsSources';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  nom: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type WidgetEpdsSourcesAggregator = {
  __typename?: 'WidgetEpdsSourcesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WidgetEpdsSourcesConnection = {
  __typename?: 'WidgetEpdsSourcesConnection';
  aggregate?: Maybe<WidgetEpdsSourcesAggregator>;
  groupBy?: Maybe<WidgetEpdsSourcesGroupBy>;
  values?: Maybe<Array<Maybe<WidgetEpdsSources>>>;
};

export type WidgetEpdsSourcesConnectionCreated_At = {
  __typename?: 'WidgetEpdsSourcesConnectionCreated_at';
  connection?: Maybe<WidgetEpdsSourcesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WidgetEpdsSourcesConnectionId = {
  __typename?: 'WidgetEpdsSourcesConnectionId';
  connection?: Maybe<WidgetEpdsSourcesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type WidgetEpdsSourcesConnectionNom = {
  __typename?: 'WidgetEpdsSourcesConnectionNom';
  connection?: Maybe<WidgetEpdsSourcesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type WidgetEpdsSourcesConnectionPublished_At = {
  __typename?: 'WidgetEpdsSourcesConnectionPublished_at';
  connection?: Maybe<WidgetEpdsSourcesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WidgetEpdsSourcesConnectionUpdated_At = {
  __typename?: 'WidgetEpdsSourcesConnectionUpdated_at';
  connection?: Maybe<WidgetEpdsSourcesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type WidgetEpdsSourcesGroupBy = {
  __typename?: 'WidgetEpdsSourcesGroupBy';
  created_at?: Maybe<Array<Maybe<WidgetEpdsSourcesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<WidgetEpdsSourcesConnectionId>>>;
  nom?: Maybe<Array<Maybe<WidgetEpdsSourcesConnectionNom>>>;
  published_at?: Maybe<Array<Maybe<WidgetEpdsSourcesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<WidgetEpdsSourcesConnectionUpdated_At>>>;
};

export type CreateArticleInput = {
  data?: InputMaybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateCartographieDsTypeInput = {
  data?: InputMaybe<CartographieDsTypeInput>;
};

export type CreateCartographieDsTypePayload = {
  __typename?: 'createCartographieDsTypePayload';
  cartographieDsType?: Maybe<CartographieDsTypes>;
};

export type CreateCartographiePoiInput = {
  data?: InputMaybe<CartographiePoiInput>;
};

export type CreateCartographiePoiPayload = {
  __typename?: 'createCartographiePoiPayload';
  cartographiePoi?: Maybe<CartographiePoi>;
};

export type CreateCartographieSourceInput = {
  data?: InputMaybe<CartographieSourceInput>;
};

export type CreateCartographieSourcePayload = {
  __typename?: 'createCartographieSourcePayload';
  cartographieSource?: Maybe<CartographieSource>;
};

export type CreateCartographieTypeInput = {
  data?: InputMaybe<CartographieTypeInput>;
};

export type CreateCartographieTypePayload = {
  __typename?: 'createCartographieTypePayload';
  cartographieType?: Maybe<CartographieTypes>;
};

export type CreateCommentairesEpdInput = {
  data?: InputMaybe<CommentairesEpdInput>;
};

export type CreateCommentairesEpdPayload = {
  __typename?: 'createCommentairesEpdPayload';
  commentairesEpd?: Maybe<CommentairesEpds>;
};

export type CreateContactInput = {
  data?: InputMaybe<ContactInput>;
};

export type CreateContactPayload = {
  __typename?: 'createContactPayload';
  contact?: Maybe<Contacts>;
};

export type CreateDemandeDeContactInput = {
  data?: InputMaybe<DemandeDeContactInput>;
};

export type CreateDemandeDeContactPayload = {
  __typename?: 'createDemandeDeContactPayload';
  demandeDeContact?: Maybe<DemandeDeContact>;
};

export type CreateEtapeInput = {
  data?: InputMaybe<EtapeInput>;
};

export type CreateEtapePayload = {
  __typename?: 'createEtapePayload';
  etape?: Maybe<Etape>;
};

export type CreateEvenementInput = {
  data?: InputMaybe<EvenementInput>;
};

export type CreateEvenementPayload = {
  __typename?: 'createEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type CreateInformationsDemographiqueInput = {
  data?: InputMaybe<InformationsDemographiqueInput>;
};

export type CreateInformationsDemographiquePayload = {
  __typename?: 'createInformationsDemographiquePayload';
  informationsDemographique?: Maybe<InformationsDemographiques>;
};

export type CreateLabelsEpdsTraductionInput = {
  data?: InputMaybe<LabelsEpdsTraductionInput>;
};

export type CreateLabelsEpdsTraductionPayload = {
  __typename?: 'createLabelsEpdsTraductionPayload';
  labelsEpdsTraduction?: Maybe<LabelsEpdsTraductions>;
};

export type CreateLocaleInput = {
  data?: InputMaybe<LocaleInput>;
};

export type CreateLocalePayload = {
  __typename?: 'createLocalePayload';
  locale?: Maybe<Locale>;
};

export type CreateParcourInput = {
  data?: InputMaybe<ParcourInput>;
};

export type CreateParcourPayload = {
  __typename?: 'createParcourPayload';
  parcour?: Maybe<Parcours>;
};

export type CreateParenthequeDocumentInput = {
  data?: InputMaybe<ParenthequeDocumentInput>;
};

export type CreateParenthequeDocumentPayload = {
  __typename?: 'createParenthequeDocumentPayload';
  parenthequeDocument?: Maybe<ParenthequeDocuments>;
};

export type CreateQuestionnaireEpdInput = {
  data?: InputMaybe<QuestionnaireEpdInput>;
};

export type CreateQuestionnaireEpdPayload = {
  __typename?: 'createQuestionnaireEpdPayload';
  questionnaireEpd?: Maybe<QuestionnaireEpds>;
};

export type CreateQuestionnaireEpdsTraductionInput = {
  data?: InputMaybe<QuestionnaireEpdsTraductionInput>;
};

export type CreateQuestionnaireEpdsTraductionPayload = {
  __typename?: 'createQuestionnaireEpdsTraductionPayload';
  questionnaireEpdsTraduction?: Maybe<QuestionnaireEpdsTraductions>;
};

export type CreateReponsesEpdInput = {
  data?: InputMaybe<ReponsesEpdInput>;
};

export type CreateReponsesEpdPayload = {
  __typename?: 'createReponsesEpdPayload';
  reponsesEpd?: Maybe<ReponsesEpds>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTemoignageInput = {
  data?: InputMaybe<TemoignageInput>;
};

export type CreateTemoignagePayload = {
  __typename?: 'createTemoignagePayload';
  temoignage?: Maybe<Temoignage>;
};

export type CreateThematiqueInput = {
  data?: InputMaybe<ThematiqueInput>;
};

export type CreateThematiquePayload = {
  __typename?: 'createThematiquePayload';
  thematique?: Maybe<Thematique>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateVideoInput = {
  data?: InputMaybe<VideoInput>;
};

export type CreateVideoPayload = {
  __typename?: 'createVideoPayload';
  video?: Maybe<Video>;
};

export type CreateWidgetEpdsSourceInput = {
  data?: InputMaybe<WidgetEpdsSourceInput>;
};

export type CreateWidgetEpdsSourcePayload = {
  __typename?: 'createWidgetEpdsSourcePayload';
  widgetEpdsSource?: Maybe<WidgetEpdsSources>;
};

export type DeleteArticleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteCartographieDsTypeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCartographieDsTypePayload = {
  __typename?: 'deleteCartographieDsTypePayload';
  cartographieDsType?: Maybe<CartographieDsTypes>;
};

export type DeleteCartographiePoiInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCartographiePoiPayload = {
  __typename?: 'deleteCartographiePoiPayload';
  cartographiePoi?: Maybe<CartographiePoi>;
};

export type DeleteCartographieSourceInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCartographieSourcePayload = {
  __typename?: 'deleteCartographieSourcePayload';
  cartographieSource?: Maybe<CartographieSource>;
};

export type DeleteCartographieTypeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCartographieTypePayload = {
  __typename?: 'deleteCartographieTypePayload';
  cartographieType?: Maybe<CartographieTypes>;
};

export type DeleteCommentairesEpdInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCommentairesEpdPayload = {
  __typename?: 'deleteCommentairesEpdPayload';
  commentairesEpd?: Maybe<CommentairesEpds>;
};

export type DeleteConfigPayload = {
  __typename?: 'deleteConfigPayload';
  config?: Maybe<Config>;
};

export type DeleteContactInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contacts>;
};

export type DeleteDemandeDeContactInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteDemandeDeContactPayload = {
  __typename?: 'deleteDemandeDeContactPayload';
  demandeDeContact?: Maybe<DemandeDeContact>;
};

export type DeleteEtapeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEtapePayload = {
  __typename?: 'deleteEtapePayload';
  etape?: Maybe<Etape>;
};

export type DeleteEvenementInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEvenementPayload = {
  __typename?: 'deleteEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteInformationsDemographiqueInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteInformationsDemographiquePayload = {
  __typename?: 'deleteInformationsDemographiquePayload';
  informationsDemographique?: Maybe<InformationsDemographiques>;
};

export type DeleteLabelsEpdsTraductionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteLabelsEpdsTraductionPayload = {
  __typename?: 'deleteLabelsEpdsTraductionPayload';
  labelsEpdsTraduction?: Maybe<LabelsEpdsTraductions>;
};

export type DeleteLocaleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteLocalePayload = {
  __typename?: 'deleteLocalePayload';
  locale?: Maybe<Locale>;
};

export type DeleteParcourInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteParcourPayload = {
  __typename?: 'deleteParcourPayload';
  parcour?: Maybe<Parcours>;
};

export type DeleteParenthequeDocumentInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteParenthequeDocumentPayload = {
  __typename?: 'deleteParenthequeDocumentPayload';
  parenthequeDocument?: Maybe<ParenthequeDocuments>;
};

export type DeleteQuestionnaireEpdInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteQuestionnaireEpdPayload = {
  __typename?: 'deleteQuestionnaireEpdPayload';
  questionnaireEpd?: Maybe<QuestionnaireEpds>;
};

export type DeleteQuestionnaireEpdsTraductionInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteQuestionnaireEpdsTraductionPayload = {
  __typename?: 'deleteQuestionnaireEpdsTraductionPayload';
  questionnaireEpdsTraduction?: Maybe<QuestionnaireEpdsTraductions>;
};

export type DeleteReponsesEpdInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteReponsesEpdPayload = {
  __typename?: 'deleteReponsesEpdPayload';
  reponsesEpd?: Maybe<ReponsesEpds>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTemoignageInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTemoignagePayload = {
  __typename?: 'deleteTemoignagePayload';
  temoignage?: Maybe<Temoignage>;
};

export type DeleteThematiqueInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteThematiquePayload = {
  __typename?: 'deleteThematiquePayload';
  thematique?: Maybe<Thematique>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteVideoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteVideoPayload = {
  __typename?: 'deleteVideoPayload';
  video?: Maybe<Video>;
};

export type DeleteWidgetEpdsSourceInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteWidgetEpdsSourcePayload = {
  __typename?: 'deleteWidgetEpdsSourcePayload';
  widgetEpdsSource?: Maybe<WidgetEpdsSources>;
};

export type EditArticleInput = {
  cartographie_pois_types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  enbref_1_icone?: InputMaybe<Enum_Article_Enbref_1_Icone>;
  enbref_1_texte?: InputMaybe<Scalars['String']>;
  enbref_2_icone?: InputMaybe<Enum_Article_Enbref_2_Icone>;
  enbref_2_texte?: InputMaybe<Scalars['String']>;
  enbref_3_icone?: InputMaybe<Enum_Article_Enbref_3_Icone>;
  enbref_3_texte?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le_saviez_vous?: InputMaybe<Scalars['String']>;
  lien_1_titre?: InputMaybe<Scalars['String']>;
  lien_1_url?: InputMaybe<Scalars['String']>;
  lien_2_titre?: InputMaybe<Scalars['String']>;
  lien_2_url?: InputMaybe<Scalars['String']>;
  lien_3_titre?: InputMaybe<Scalars['String']>;
  lien_3_url?: InputMaybe<Scalars['String']>;
  lien_4_titre?: InputMaybe<Scalars['String']>;
  lien_4_url?: InputMaybe<Scalars['String']>;
  mots_cles?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<Scalars['Boolean']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  resume?: InputMaybe<Scalars['String']>;
  texte_1?: InputMaybe<Scalars['String']>;
  texte_1_titre?: InputMaybe<Scalars['String']>;
  texte_2?: InputMaybe<Scalars['String']>;
  texte_2_titre?: InputMaybe<Scalars['String']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  titre?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  visuel?: InputMaybe<Scalars['ID']>;
};

export type EditCartographieDsTypeInput = {
  cartographie_pois_type?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<EditComponentCartographieTypeInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCartographiePoiInput = {
  cartographie_adresses?: InputMaybe<Array<InputMaybe<EditComponentCartographieAdresseInput>>>;
  cartographie_adresses_json?: InputMaybe<Scalars['JSON']>;
  cartographie_references_json?: InputMaybe<Scalars['JSON']>;
  courriel?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  nom?: InputMaybe<Scalars['String']>;
  references?: InputMaybe<Array<InputMaybe<EditComponentCartographieSourceReferenceInput>>>;
  site_internet?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCartographieSourceInput = {
  champs?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  fichier?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  lignes_insertion?: InputMaybe<Scalars['Int']>;
  lignes_total?: InputMaybe<Scalars['Int']>;
  nom?: InputMaybe<Scalars['String']>;
  pret_a_traiter?: InputMaybe<Scalars['Boolean']>;
  regles?: InputMaybe<EditComponentCartographieReglesChampInput>;
  regles_script?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  traitement?: InputMaybe<Enum_Cartographiesource_Traitement>;
  type?: InputMaybe<Enum_Cartographiesource_Type>;
  updated_by?: InputMaybe<Scalars['ID']>;
  version?: InputMaybe<Scalars['Float']>;
};

export type EditCartographieTypeInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  categorie?: InputMaybe<Enum_Cartographietypes_Categorie>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  identifiant?: InputMaybe<Scalars['String']>;
  nom?: InputMaybe<Scalars['String']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCommentairesEpdInput = {
  commentaire?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  score?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCartographieAdresseInput = {
  adresse?: InputMaybe<Scalars['String']>;
  cartographie_ligne?: InputMaybe<Scalars['String']>;
  code_postal?: InputMaybe<Scalars['String']>;
  commune?: InputMaybe<Scalars['String']>;
  geocode?: InputMaybe<Scalars['Boolean']>;
  geocode_adresse?: InputMaybe<Scalars['String']>;
  geocode_code_postal?: InputMaybe<Scalars['String']>;
  geocode_commune?: InputMaybe<Scalars['String']>;
  geocode_position_latitude?: InputMaybe<Scalars['Float']>;
  geocode_position_longitude?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  position_latitude?: InputMaybe<Scalars['Float']>;
  position_longitude?: InputMaybe<Scalars['Float']>;
};

export type EditComponentCartographieConditionSimpleInput = {
  condition_source?: InputMaybe<Scalars['String']>;
  condition_valeur?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
};

export type EditComponentCartographieRegleChampInput = {
  conditions?: InputMaybe<Array<InputMaybe<EditComponentCartographieConditionSimpleInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  valeur?: InputMaybe<Scalars['String']>;
};

export type EditComponentCartographieRegleTypeInput = {
  conditions?: InputMaybe<Array<InputMaybe<EditComponentCartographieConditionSimpleInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  valeur?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCartographieReglesChampInput = {
  adresse?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  code_postal?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  commune?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  courriel?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  position_latitude?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  position_longitude?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  references?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  site_internet?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  telephone?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleChampInput>>>;
  type?: InputMaybe<Array<InputMaybe<EditComponentCartographieRegleTypeInput>>>;
};

export type EditComponentCartographieSourceReferenceInput = {
  cartographie_source?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  valeur?: InputMaybe<Scalars['String']>;
};

export type EditComponentCartographieTypeInput = {
  id?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type EditComponentTraductionLabelInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  texte?: InputMaybe<Scalars['String']>;
};

export type EditConfigInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  lastAppVersionNumber?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditContactInput = {
  commentaire?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date_naissance_dernier_enfant?: InputMaybe<Scalars['Date']>;
  date_prise_contact?: InputMaybe<Scalars['Date']>;
  departement_code?: InputMaybe<Scalars['String']>;
  departement_libelle?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Enum_Contacts_Mode>;
  nombre_enfants?: InputMaybe<Scalars['Int']>;
  personne_accompagnee?: InputMaybe<Enum_Contacts_Personne_Accompagnee>;
  prenom?: InputMaybe<Scalars['String']>;
  provenance?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditDemandeDeContactInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  reponses_epds?: InputMaybe<Scalars['ID']>;
  type_de_contact?: InputMaybe<Enum_Demandedecontact_Type_De_Contact>;
  updated_by?: InputMaybe<Scalars['ID']>;
  widget_epds_source?: InputMaybe<Scalars['ID']>;
};

export type EditEtapeInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cartographie_types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  debut?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fin?: InputMaybe<Scalars['Int']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  parcours?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  parentheque_documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematiques?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditEvenementInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  debut?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fin?: InputMaybe<Scalars['Int']>;
  important?: InputMaybe<Scalars['Boolean']>;
  nom?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  types_poi?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditInformationsDemographiqueInput = {
  age?: InputMaybe<Enum_Informationsdemographiques_Age>;
  code_postal?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  csp_code?: InputMaybe<Scalars['String']>;
  csp_libelle?: InputMaybe<Scalars['String']>;
  departement?: InputMaybe<Scalars['String']>;
  departement_libelle?: InputMaybe<Scalars['String']>;
  entourage_dispo?: InputMaybe<Enum_Informationsdemographiques_Entourage_Dispo>;
  genre?: InputMaybe<Enum_Informationsdemographiques_Genre>;
  region?: InputMaybe<Scalars['String']>;
  reponses_epds?: InputMaybe<Scalars['ID']>;
  situation?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  ville?: InputMaybe<Scalars['String']>;
};

export type EditLabelsEpdsTraductionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<EditComponentTraductionLabelInput>>>;
  langue?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  drapeau?: InputMaybe<Scalars['ID']>;
  identifiant?: InputMaybe<Scalars['String']>;
  libelle_francais?: InputMaybe<Scalars['String']>;
  libelle_langue?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  sens_lecture_droite_vers_gauche?: InputMaybe<Scalars['Boolean']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditParcourInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nom?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditParenthequeDocumentInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fichier?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditQuestionnaireEpdInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  libelle?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  reponse_1_libelle?: InputMaybe<Scalars['String']>;
  reponse_1_points?: InputMaybe<Scalars['Int']>;
  reponse_2_libelle?: InputMaybe<Scalars['String']>;
  reponse_2_points?: InputMaybe<Scalars['Int']>;
  reponse_3_libelle?: InputMaybe<Scalars['String']>;
  reponse_3_points?: InputMaybe<Scalars['Int']>;
  reponse_4_libelle?: InputMaybe<Scalars['String']>;
  reponse_4_points?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditQuestionnaireEpdsTraductionInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  langue?: InputMaybe<Scalars['ID']>;
  libelle?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  reponse_1_libelle?: InputMaybe<Scalars['String']>;
  reponse_1_points?: InputMaybe<Scalars['Int']>;
  reponse_2_libelle?: InputMaybe<Scalars['String']>;
  reponse_2_points?: InputMaybe<Scalars['Int']>;
  reponse_3_libelle?: InputMaybe<Scalars['String']>;
  reponse_3_points?: InputMaybe<Scalars['Int']>;
  reponse_4_libelle?: InputMaybe<Scalars['String']>;
  reponse_4_points?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditReponsesEpdInput = {
  compteur?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['ID']>;
  genre?: InputMaybe<Enum_Reponsesepds_Genre>;
  langue?: InputMaybe<Scalars['ID']>;
  reponse_1?: InputMaybe<Scalars['Int']>;
  reponse_2?: InputMaybe<Scalars['Int']>;
  reponse_3?: InputMaybe<Scalars['Int']>;
  reponse_4?: InputMaybe<Scalars['Int']>;
  reponse_5?: InputMaybe<Scalars['Int']>;
  reponse_6?: InputMaybe<Scalars['Int']>;
  reponse_7?: InputMaybe<Scalars['Int']>;
  reponse_8?: InputMaybe<Scalars['Int']>;
  reponse_9?: InputMaybe<Scalars['Int']>;
  reponse_10?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Enum_Reponsesepds_Source>;
  source_widget?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTemoignageInput = {
  chiffre_choc?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  source?: InputMaybe<Scalars['String']>;
  texte?: InputMaybe<Scalars['String']>;
  titre?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditThematiqueInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nom?: InputMaybe<Scalars['String']>;
  parentheque_documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type EditVideoInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  etapes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  evenements?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  miniature?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Scalars['String']>;
  ordre?: InputMaybe<Scalars['Int']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  thematique?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditWidgetEpdsSourceInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  nom?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type UpdateArticleInput = {
  data?: InputMaybe<EditArticleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateCartographieDsTypeInput = {
  data?: InputMaybe<EditCartographieDsTypeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCartographieDsTypePayload = {
  __typename?: 'updateCartographieDsTypePayload';
  cartographieDsType?: Maybe<CartographieDsTypes>;
};

export type UpdateCartographiePoiInput = {
  data?: InputMaybe<EditCartographiePoiInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCartographiePoiPayload = {
  __typename?: 'updateCartographiePoiPayload';
  cartographiePoi?: Maybe<CartographiePoi>;
};

export type UpdateCartographieSourceInput = {
  data?: InputMaybe<EditCartographieSourceInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCartographieSourcePayload = {
  __typename?: 'updateCartographieSourcePayload';
  cartographieSource?: Maybe<CartographieSource>;
};

export type UpdateCartographieTypeInput = {
  data?: InputMaybe<EditCartographieTypeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCartographieTypePayload = {
  __typename?: 'updateCartographieTypePayload';
  cartographieType?: Maybe<CartographieTypes>;
};

export type UpdateCommentairesEpdInput = {
  data?: InputMaybe<EditCommentairesEpdInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCommentairesEpdPayload = {
  __typename?: 'updateCommentairesEpdPayload';
  commentairesEpd?: Maybe<CommentairesEpds>;
};

export type UpdateConfigInput = {
  data?: InputMaybe<EditConfigInput>;
};

export type UpdateConfigPayload = {
  __typename?: 'updateConfigPayload';
  config?: Maybe<Config>;
};

export type UpdateContactInput = {
  data?: InputMaybe<EditContactInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contacts>;
};

export type UpdateDemandeDeContactInput = {
  data?: InputMaybe<EditDemandeDeContactInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateDemandeDeContactPayload = {
  __typename?: 'updateDemandeDeContactPayload';
  demandeDeContact?: Maybe<DemandeDeContact>;
};

export type UpdateEtapeInput = {
  data?: InputMaybe<EditEtapeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEtapePayload = {
  __typename?: 'updateEtapePayload';
  etape?: Maybe<Etape>;
};

export type UpdateEvenementInput = {
  data?: InputMaybe<EditEvenementInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEvenementPayload = {
  __typename?: 'updateEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type UpdateInformationsDemographiqueInput = {
  data?: InputMaybe<EditInformationsDemographiqueInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateInformationsDemographiquePayload = {
  __typename?: 'updateInformationsDemographiquePayload';
  informationsDemographique?: Maybe<InformationsDemographiques>;
};

export type UpdateLabelsEpdsTraductionInput = {
  data?: InputMaybe<EditLabelsEpdsTraductionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateLabelsEpdsTraductionPayload = {
  __typename?: 'updateLabelsEpdsTraductionPayload';
  labelsEpdsTraduction?: Maybe<LabelsEpdsTraductions>;
};

export type UpdateLocaleInput = {
  data?: InputMaybe<EditLocaleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateLocalePayload = {
  __typename?: 'updateLocalePayload';
  locale?: Maybe<Locale>;
};

export type UpdateParcourInput = {
  data?: InputMaybe<EditParcourInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateParcourPayload = {
  __typename?: 'updateParcourPayload';
  parcour?: Maybe<Parcours>;
};

export type UpdateParenthequeDocumentInput = {
  data?: InputMaybe<EditParenthequeDocumentInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateParenthequeDocumentPayload = {
  __typename?: 'updateParenthequeDocumentPayload';
  parenthequeDocument?: Maybe<ParenthequeDocuments>;
};

export type UpdateQuestionnaireEpdInput = {
  data?: InputMaybe<EditQuestionnaireEpdInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateQuestionnaireEpdPayload = {
  __typename?: 'updateQuestionnaireEpdPayload';
  questionnaireEpd?: Maybe<QuestionnaireEpds>;
};

export type UpdateQuestionnaireEpdsTraductionInput = {
  data?: InputMaybe<EditQuestionnaireEpdsTraductionInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateQuestionnaireEpdsTraductionPayload = {
  __typename?: 'updateQuestionnaireEpdsTraductionPayload';
  questionnaireEpdsTraduction?: Maybe<QuestionnaireEpdsTraductions>;
};

export type UpdateReponsesEpdInput = {
  data?: InputMaybe<EditReponsesEpdInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateReponsesEpdPayload = {
  __typename?: 'updateReponsesEpdPayload';
  reponsesEpd?: Maybe<ReponsesEpds>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTemoignageInput = {
  data?: InputMaybe<EditTemoignageInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTemoignagePayload = {
  __typename?: 'updateTemoignagePayload';
  temoignage?: Maybe<Temoignage>;
};

export type UpdateThematiqueInput = {
  data?: InputMaybe<EditThematiqueInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateThematiquePayload = {
  __typename?: 'updateThematiquePayload';
  thematique?: Maybe<Thematique>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateVideoInput = {
  data?: InputMaybe<EditVideoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateVideoPayload = {
  __typename?: 'updateVideoPayload';
  video?: Maybe<Video>;
};

export type UpdateWidgetEpdsSourceInput = {
  data?: InputMaybe<EditWidgetEpdsSourceInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateWidgetEpdsSourcePayload = {
  __typename?: 'updateWidgetEpdsSourcePayload';
  widgetEpdsSource?: Maybe<WidgetEpdsSources>;
};
