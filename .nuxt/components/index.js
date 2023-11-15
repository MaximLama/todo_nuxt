export { default as Dashboard } from '../../components/Dashboard.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Workspace } from '../../components/Workspace.vue'
export { default as AsideBlock } from '../../components/aside/AsideBlock.vue'
export { default as AsideMenu } from '../../components/aside/AsideMenu.vue'
export { default as AsideThemeSwitcher } from '../../components/aside/ThemeSwitcher.vue'
export { default as AsideWorkspaceMenu } from '../../components/aside/workspace-menu/Menu.vue'
export { default as AsideWorkspaceMenuItem } from '../../components/aside/workspace-menu/MenuItem.vue'
export { default as AsideWorkspaceMenuWorkspaceMenuPopup } from '../../components/aside/workspace-menu/workspace-menu-popup/Popup.vue'
export { default as AsideWorkspaceColor } from '../../components/aside/workspace-menu/workspace-menu-popup/WorkspaceColor.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
