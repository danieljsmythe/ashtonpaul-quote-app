/*
 * action types
 */

 export const HANDLE_CLICK = 'HANDLE_CLICK'

/*
 * other constants
 */



/*
 * action creators
 */

export function buttonClick (index, value) {
    return {
        type: HANDLE_CLICK,
        index: index,
        value: value
    }
}

