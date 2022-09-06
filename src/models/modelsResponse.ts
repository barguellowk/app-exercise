export interface ResponseCreateApp {
    extraData: [],
    applicationId: string,
    name: string,
    url: string,
    logo: string,
    Error: string
}

export interface ErrorResponse {
    ErrorCode: string
    Message: string
}

export interface ResponseCreateIdentity {
    state: string,
    passwordStrength: any
    lastPasswordChangeDate: Date
    isSubscribedToNewsletter: any
    isUnlisted: boolean,
    unlistedType: any,
    authenticationOnly: boolean,
    changePasswordNextLogon: boolean,
    members: string[],
    externalIdentities: any,
    creationData: any
    emails: Email[],
    identityId: string,
    name: string,
    surname: string,
    address: string,
    postalCode: string,
    city: string,
    region: string,
    country: string,
    language: string,
    extraData: any[],
    error: string
}

interface Email {
    emailId: string,
    identityId: string,
    email: string,
    principal: boolean,
    state: string,
    extraData: string[]
}

export interface ReponseCreateOrganization {
    members: any,
    licensedApplications: any,
    grantedApplications: any,
    legalEntities: any,
    organizationalUnitId: any,
    kind: string,
    complexPassword: boolean,
    passwordCaducity: boolean,
    passwordCaducityCounter: any,
    passwordCaducityKind: any,
    allowGoogle: boolean,
    allowFacebook: boolean,
    allowWindows: boolean,
    allowTwitter: boolean,
    parentId: any,
    isServiceProvider: boolean,
    name: string,
    displayName: any,
    address: any,
    postalCode: any,
    city: any,
    region: any,
    country: string,
    extraData: string[],
    error: string
}

export interface ResponseMemberCreate {
    identity: any,
    invitation: any,
    organizationalUnit: OrganizationalUnit,
    roles: any[],
    invitationId: any,
    identityId: string,
    organizationalUnitId: string
    memberId: string,
    profileType: string,
    rights: any[],
    extraData: any[],
    state: string,
    error: string
}

interface OrganizationalUnit {
    organizationalUnitId: string,
    kind: string,
    complexPassword: boolean,
    passwordCaducity: boolean,
    passwordCaducityCounter: any,
    passwordCaducityKind: any,
    allowGoogle: boolean,
    allowFacebook: boolean,
    allowWindows: boolean,
    allowTwitter: boolean,
    parentId: any
    isServiceProvider: boolean,
    name: string,
    displayName: string,
    address: any,
    postalCode: any,
    city: any,
    region: any,
    country: string,
    extraData: string[],
}

export interface ResponseLicensedCreate {
    Application: Application,
    extraData: string[],
    licensedApplicationId: string,
    applicationId: string,
    organizationalUnitId: string,
    error: string
}

interface Application {
    name: string,
    url: string,
    logo: any
}

export interface ResponseRoleCreate {
    extraData: any[],
    consumes: any[],
    relatedConsumptions: any[],
    roleId: string,
    licensedApplicationId: string,
    grantedApplicationId: any,
    memberId: string,
    error: string
}