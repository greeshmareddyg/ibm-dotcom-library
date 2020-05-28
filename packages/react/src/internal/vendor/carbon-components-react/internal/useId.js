/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useRef } from 'react';
import setupGetInstanceId from '../tools/setupGetInstanceId';
var getId = setupGetInstanceId();
/**
 * Generate a unique ID with an optional prefix prepended to it
 * @param {string} [prefix]
 * @returns {string}
 */

export function useId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  var ref = useRef("".concat(prefix, "-").concat(getId()));
  return ref.current;
}