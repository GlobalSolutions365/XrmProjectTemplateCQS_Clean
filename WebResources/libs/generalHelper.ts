﻿namespace XRM.Libs {
    export class GeneralHelper {
        public static newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        public static isGuid(value) {
            var regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
            var match = regex.exec(value);
            return match != null;
        }     

        public static cleanupGuid(guid: string): string {
            if (!guid) {
                return "";
            }

            return guid.toLowerCase().replace("{", "").replace("}", "");
        }

        public static userHasRole(roleName: string): boolean {
            return (Xrm as any).Utility.getGlobalContext().userSettings.roles.getByFilter(r => r.name == roleName).length > 0;
        }
    }
}
