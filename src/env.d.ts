/// <reference types="astro/client" />

import type { IntercomInstance } from "@intercom/messenger-js-sdk/dist/types";

declare module "venobox/dist/venobox";
declare var grecaptcha: any;
declare var ymaps: any;
declare var Intercom: IntercomInstance;
