
/**
 * Member Schema
 */

module.exports = {
  MemberKey: {type:String, primary:true, core:true},
  OriginatingSystemMemberKey: {type:String, core:true},
  OriginatingSystemName: {type:String},
  MemberMlsId: {type:String, core:true},
  MemberLoginId: {type:String},
  MemberNrdsID: {type:String, core:true},
  MemberPassword: {type:String},
  MemberNamePrefix: {type:String},
  MemberFirstName: {type:String, core:true},
  MemberMiddleName: {type:String, core:true},
  MemberLastName: {type:String, core:true},
  MemberNameSuffix: {type:String},
  MemberFullName: {type:String},
  MemberNickname: {type:String},
  JobTitle: {type:String},
  MemberEmail: {type:String, core:true},
  MemberPreferredPhone: {type:String, core:true},
  MemberPreferredPhoneExt: {type:Number, core:true},
  MemberOfficePhone: {type:String, core:true},
  MemberOfficePhoneExt: {type:String, core:true},
  MemberMobilePhone: {type:String, core:true},
  MemberDirectPhone: {type:String},
  MemberHomePhone: {type:String},
  MemberFax: {type:String},
  MemberPager: {type:String},
  MemberVoiceMail: {type:String},
  MemberVoiceMailExt: {type:Number},
  MemberTollFreePhone: {type:String},
  MemberPhoneTTYTDD: {type:String},
  MemberOtherPhoneType: {type:String},
  MemberOtherPhoneNumber: {type:String},
  MemberOtherPhoneExt: {type:String},
  SocialMediaType: {type:String},
  SocialMediaUrlOrId: {type:String},
  MemberAOR: {type:String, core:true},
  MemberAORMlsId: {type:String},
  MemberAORkey: {type:String},
  MemberStateLicense: {type:String, core:true},
  MemberStateLicenseState: {type:String},
  MemberDesignation: {type:String},
  MemberAddress1: {type:String, core:true},
  MemberAddress2: {type:String, core:true},
  MemberCity: {type:String, core:true},
  MemberStateOrProvince: {type:String, core:true},
  MemberPostalCode: {type:String, core:true},
  MemberPostalCodePlus4: {type:String, core:true},
  MemberCarrierRoute: {type:String},
  MemberCountyOrParish: {type:String, core:true},
  MemberCountry: {type:String, core:true},
  MemberMlsAccessYN: {type:Boolean},
  MemberStatus: {type:String, core:true},
  MemberMlsSecurityClass: {type:String},
  MemberType: {type:String},
  MemberAssociationComments: {type:String},
  MemberLanguages: {type:String},
  OfficeName: {type:String},
  OfficeKey: {type:String, core:true},
  OfficeMlsId: {type:String, core:true},
  TimestampEntered: {type:Date, core:true},
  TimestampLastLoggedIn: {type:Date},
  TimestampModified: {type:Date, core:true},
  Photos: {type:Array, default:[]}
};
