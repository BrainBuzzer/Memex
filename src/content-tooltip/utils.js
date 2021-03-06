import { getLocalStorage, setLocalStorage } from 'src/util/storage'
import { TOOLTIP_STORAGE_NAME, TOOLTIP_DEFAULT_OPTION } from './constants'

export const delayed = (f, delay) => {
    let timeout = null
    const clear = () => {
        timeout && clearTimeout(timeout)
        timeout = null
    }

    return (...args) => {
        clear()
        timeout = setTimeout(() => {
            f(...args)
            clear()
        }, delay)
    }
}

export const getExtURL = location =>
    browser.extension ? browser.extension.getURL(location) : location

export const copyToClipboard = text => {
    const dummy = document.createElement('input')
    document.body.appendChild(dummy)
    dummy.setAttribute('value', text)
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
}

export const getTooltipState = async () =>
    getLocalStorage(TOOLTIP_STORAGE_NAME, TOOLTIP_DEFAULT_OPTION)

export const setTooltipState = async tooltipValue =>
    setLocalStorage(TOOLTIP_STORAGE_NAME, tooltipValue)
