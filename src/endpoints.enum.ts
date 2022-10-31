export enum EndpointsEnum {
  /**
   * WS Autoservicio de Acceso a APIs
   **/
  WSAA = "https://wsaa.afip.gov.ar/ws/services/LoginCms",
  WSAA_TEST = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms",

  /**
   * WS Facturacion Electronica
   **/
  WSFEV1 = "https://servicios1.afip.gov.ar/wsfev1/service.asmx",
  WSFEV1_TEST = "https://wswhomo.afip.gov.ar/wsfev1/service.asmx",

  /**
   * WS Padron
   **/
  WSSR_PADRON_FIVE = "https://aws.afip.gov.ar/sr-padron/webservices/personaServiceA5",
  WSSR_PADRON_FIVE_TEST = "https://awshomo.afip.gov.ar/sr-padron/webservices/personaServiceA5",
}