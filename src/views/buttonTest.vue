<template>
    <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info" link>Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-link href="https://element-plus.org" target="_blank">链接🔗</el-link>
    <el-upload></el-upload>
  </div>

  <!-- <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>

  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle /> -->
  <!-- </div> -->
  </template>
  
<script>
import { defineComponent as _defineComponent } from 'vue'
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, unref as _unref, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "mb-4" }
const _hoisted_2 = { class: "mb-4" }
const _hoisted_3 = { class: "mb-4" }

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const __sfc__ = /*#__PURE__*/_defineComponent({
  __name: 'App',
  // eslint-disable-next-line no-unused-vars
  setup(__props) {


return (_ctx,_cache) => {
  const _component_el_button = _resolveComponent("el-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_el_button, null, {
        default: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode("Default")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "primary",
        disabled: true,
        round: true
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode("Primary")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, { type: "success" }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode("Success")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, { type: "info" }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode("Info")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, { type: "warning" }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode("Warning")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, { type: "danger" }, {
        default: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode("Danger")
        ])),
        _: 1 /* STABLE */
      })
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_el_button, { plain: "" }, {
        default: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode("Plain")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "primary",
        plain: ""
      }, {
        default: _withCtx(() => _cache[7] || (_cache[7] = [
          _createTextVNode("Primary")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "success",
        plain: ""
      }, {
        default: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode("Success")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "info",
        plain: ""
      }, {
        default: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode("Info")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "warning",
        plain: ""
      }, {
        default: _withCtx(() => _cache[10] || (_cache[10] = [
          _createTextVNode("Warning")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "danger",
        plain: ""
      }, {
        default: _withCtx(() => _cache[11] || (_cache[11] = [
          _createTextVNode("Danger")
        ])),
        _: 1 /* STABLE */
      })
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_el_button, { round: "" }, {
        default: _withCtx(() => _cache[12] || (_cache[12] = [
          _createTextVNode("Round")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "primary",
        round: ""
      }, {
        default: _withCtx(() => _cache[13] || (_cache[13] = [
          _createTextVNode("Primary")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "success",
        round: ""
      }, {
        default: _withCtx(() => _cache[14] || (_cache[14] = [
          _createTextVNode("Success")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "info",
        round: ""
      }, {
        default: _withCtx(() => _cache[15] || (_cache[15] = [
          _createTextVNode("Info")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "warning",
        round: ""
      }, {
        default: _withCtx(() => _cache[16] || (_cache[16] = [
          _createTextVNode("Warning")
        ])),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_el_button, {
        type: "danger",
        round: ""
      }, {
        default: _withCtx(() => _cache[17] || (_cache[17] = [
          _createTextVNode("Danger")
        ])),
        _: 1 /* STABLE */
      })
    ]),
    _createElementVNode("div", null, [
      _createVNode(_component_el_button, {
        icon: _unref(Search),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"]),
      _createVNode(_component_el_button, {
        type: "primary",
        icon: _unref(Edit),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"]),
      _createVNode(_component_el_button, {
        type: "success",
        icon: _unref(Check),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"]),
      _createVNode(_component_el_button, {
        type: "info",
        icon: _unref(Message),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"]),
      _createVNode(_component_el_button, {
        type: "warning",
        icon: _unref(Star),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"]),
      _createVNode(_component_el_button, {
        type: "danger",
        icon: _unref(Delete),
        circle: ""
      }, null, 8 /* PROPS */, ["icon"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
}

})
__sfc__.__file = "src/App.vue"
export default __sfc__
  </script>
  
  <style>
  
  </style>