import type { AuthLocalization } from "../auth-localization"
import ar from "./jsons/ar.json"
import bg from "./jsons/bg.json"
import cs from "./jsons/cs.json"
import da from "./jsons/da.json"
import de from "./jsons/de.json"
import el from "./jsons/el.json"
import en from "./jsons/en.json"
import et from "./jsons/et.json"
import fi from "./jsons/fi.json"
import fr from "./jsons/fr.json"
import hu from "./jsons/hu.json"
import id from "./jsons/id.json"
import it from "./jsons/it.json"
import ja from "./jsons/ja.json"
import ko from "./jsons/ko.json"
import lt from "./jsons/lt.json"
import lv from "./jsons/lv.json"
import nb from "./jsons/nb.json"
import nl from "./jsons/nl.json"
import pl from "./jsons/pl.json"
import pt from "./jsons/pt.json"
import ro from "./jsons/ro.json"
import ru from "./jsons/ru.json"
import sk from "./jsons/sk.json"
import sl from "./jsons/sl.json"
import sv from "./jsons/sv.json"
import tr from "./jsons/tr.json"
import uk from "./jsons/uk.json"
import zh from "./jsons/zh.json"

export type SupportedLocale =
    | "en"
    | "ja"
    | "ar"
    | "bg"
    | "cs"
    | "da"
    | "de"
    | "el"
    | "et"
    | "fi"
    | "fr"
    | "hu"
    | "id"
    | "it"
    | "ko"
    | "lt"
    | "lv"
    | "nb"
    | "nl"
    | "pl"
    | "pt"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sv"
    | "tr"
    | "uk"
    | "zh"

const locales: Record<SupportedLocale, AuthLocalization> = {
    en,
    ja,
    ar,
    bg,
    cs,
    da,
    de,
    el,
    et,
    fi,
    fr,
    hu,
    id,
    it,
    ko,
    lt,
    lv,
    nb,
    nl,
    pl,
    pt,
    ro,
    ru,
    sk,
    sl,
    sv,
    tr,
    uk,
    zh
}

export const getLocale = (locale: SupportedLocale): AuthLocalization => {
    return locales[locale]
}

export const isSupportedLocale = (locale: string): locale is SupportedLocale => {
    return locale in locales
}
