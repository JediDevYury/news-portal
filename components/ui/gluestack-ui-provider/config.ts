"use client";

import { vars } from "nativewind";

export const config = {
  light: vars({
    /* Primary */
    "--color-primary-50": "251 233 233",
    "--color-primary-100": "249 221 222",
    "--color-primary-200": "242 186 188",
    "--color-primary-300": "214 31 38",
    "--color-primary-400": "193 28 34",
    "--color-primary-500": "171 25 30",
    "--color-primary-600": "161 23 29",
    "--color-primary-700": "128 19 23",
    "--color-primary-800": "128 19 23",
    "--color-primary-900": "75 11 13",

    /* Danger */
    "--color-danger-50": "251 233 233",
    "--color-danger-100": "249 221 222",
    "--color-danger-200": "242 186 188",
    "--color-danger-300": "214 31 38",
    "--color-danger-400": "193 28 34",
    "--color-danger-500": "171 25 30",
    "--color-danger-600": "161 23 29",
    "--color-danger-700": "128 19 23",
    "--color-danger-800": "96 14 17",
    "--color-danger-900": "75 11 13",

    /* Secondary  */
    "--color-secondary-50": "242 242 242",
    "--color-secondary-100": "219 219 219",
    "--color-secondary-200": "202 202 202",
    "--color-secondary-300": "178 178 178",
    "--color-secondary-400": "163 163 163",
    "--color-secondary-500": "140 140 140",
    "--color-secondary-600": "127 127 127",
    "--color-secondary-700": "99 99 99",
    "--color-secondary-800": "77 77 77",
    "--color-secondary-900": "59 59 59",

    /* Success */
    "--color-success-50": "233 247 239",
    "--color-success-100": "223 243 231",
    "--color-success-200": "188 230 206",
    "--color-success-300": "39 174 96",
    "--color-success-400": "35 157 86",
    "--color-success-500": "31 139 77",
    "--color-success-600": "29 131 72",
    "--color-success-700": "23 104 58",
    "--color-success-800": "18 78 43",
    "--color-success-900": "14 61 34",

    /* Warning */
    "--color-warning-50": "255 249 245",
    "--color-warning-100": "255 231 213",
    "--color-warning-200": "254 205 170",
    "--color-warning-300": "253 173 116",
    "--color-warning-400": "251 149 75",
    "--color-warning-500": "231 120 40",
    "--color-warning-600": "215 108 31",
    "--color-warning-700": "180 90 26",
    "--color-warning-800": "130 68 23",
    "--color-warning-900": "108 56 19",

    /* Info */
    "--color-info-50": "199 235 252",
    "--color-info-100": "162 221 250",
    "--color-info-200": "124 207 248",
    "--color-info-300": "87 194 246",
    "--color-info-400": "50 180 244",
    "--color-info-500": "13 166 242",
    "--color-info-600": "11 141 205",
    "--color-info-700": "9 115 168",
    "--color-info-800": "7 90 131",
    "--color-info-900": "5 64 93",

    /* Brand */
    "--color-brand-100": "214 31 38",
    "--color-brand-200": "255 255 255",
    "--color-brand-300": "251 251 251",
    "--color-brand-400": "187 189 192",
    "--color-brand-500": "187 189 192",
    "--color-brand-600": "28 28 28",
    "--color-brand-700": "0 0 0",
  }),
  dark: vars({
    /* Primary */
    "--color-primary-50": "148 148 148",
    "--color-primary-100": "158 158 158",
    "--color-primary-200": "179 179 179",
    "--color-primary-300": "199 199 199",
    "--color-primary-400": "230 230 230",
    "--color-primary-500": "240 240 240",
    "--color-primary-600": "250 250 250",
    "--color-primary-700": "252 252 252",
    "--color-primary-800": "253 253 253",
    "--color-primary-900": "253 252 252",

    /* Secondary  */
    "--color-secondary-50": "24 23 23",
    "--color-secondary-100": "39 38 38",
    "--color-secondary-200": "63 64 64",
    "--color-secondary-300": "81 82 82",
    "--color-secondary-400": "94 95 95",
    "--color-secondary-500": "114 115 115",
    "--color-secondary-600": "175 176 176",
    "--color-secondary-700": "219 219 219",
    "--color-secondary-800": "231 232 232",
    "--color-secondary-900": "241 242 242",

    /* Success */
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",

    /* Warning */
    "--color-warning-50": "255 248 230",
    "--color-warning-100": "255 245 217",
    "--color-warning-200": "255 234 176",
    "--color-warning-300": "255 186 0",
    "--color-warning-400": "230 167 0",
    "--color-warning-500": "204 149 0",
    "--color-warning-600": "191 140 0",
    "--color-warning-700": "153 112 0",
    "--color-warning-800": "115 84 0",
    "--color-warning-900": "89 65 0",

    /* Info */
    "--color-info-50": "234 242 253",
    "--color-info-100": "224 236 252",
    "--color-info-200": "191 216 249",
    "--color-info-300": "47 128 237",
    "--color-info-400": "42 115 213",
    "--color-info-500": "38 102 190",
    "--color-info-600": "35 96 178",
    "--color-info-700": "28 77 142",
    "--color-info-800": "21 58 107",
    "--color-info-900": "16 45 83",

    /* Brand */
    "--color-brand-100": "214 31 38",
    "--color-brand-200": "255 255 255",
    "--color-brand-300": "251 251 251",
    "--color-brand-400": "187 189 192",
    "--color-brand-500": "187 189 192",
    "--color-brand-600": "28 28 28",
    "--color-brand-700": "0 0 0",
  }),
};
