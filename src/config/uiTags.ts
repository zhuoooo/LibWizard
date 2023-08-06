const uiTags: Record<string, any> = {
  "a-button": {
    "defaults": ["type"],
    "attributes": ["disabled", "ghost", "htmlType", "icon", "loading", "shape", "size", "type", "block"],
    "description": "to trigger an operation"
  },
  "a-icon": {
    "defaults": ["type"],
    "attributes": ["type", "style", "theme", "spin", "component", "twoToneColor"],
    "description": "semantic vector graphics"
  },
  "a-row": {
    "attributes": ["align", "gutter", "justify", "type"],
    "subtags": ["a-col"],
    "description": "a row in grid system"
  },
  "a-col": {
    "defaults": [":span"],
    "attributes": ["offset", "order", "pull", "push", "span", "xs", "sm", "md", "lg", "xl", "xxl"],
    "description": "a column in grid system"
  },
  "a-layout": {
    "attributes": ["class", "style", "hasSider"],
    "subtags": ["a-layout-sider", "a-layout-header", "a-layout-content", "a-layout-footer"],
    "description": "layout"
  },
  "a-layout-sider": {
    "attributes": ["breakpoint", "class", "collapsed", "collapsedWidth", "collapsible", "defaultCollapsed", "reverseArrow", "style", "theme", "trigger", "width"],
    "description": "layout sider"
  },
  "a-layout-header": {
    "description": "layout header"
  },
  "a-layout-content": {
    "description": "layout content"
  },
  "a-layout-footer": {
    "description": "layout footer"
  },
  "a-affix": {
    "attributes": ["offsetBottom", "offsetTop", "target"],
    "description": "make an element stick to viewport"
  },
  "a-breadcrumb": {
    "attributes": ["params", "routes", "separator"],
    "subtags": ["a-breadcrumb-item"],
    "description": "a breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."
  },
  "a-breadcrumb-item": {
    "description": "breadcrumb item"
  },
  "a-dropdown": {
    "attributes": ["disabled", "getPopupContainer", "placement", "trigger", "visible"],
    "description": "a dropdown list."
  },
  "a-dropdown-button": {
    "attributes": ["disabled", "placement", "size", "trigger", "type", "visible"],
    "description": "a dropdown button list."
  },
  "a-menu": {
    "subtags": ["a-menu-item", "a-sub-menu"],
    "attributes": ["defaultOpenKeys", "defaultSelectedKeys", "forceSubMenuRender", "inlineCollapsed", "inlineIndent", "mode", "multiple", "openKeys", "selectable", "selectedKeys", "style", "subMenuCloseDelay", "subMenuOpenDelay", "theme"],
    "description": "menu list of navigation"
  },
  "a-menu-item": {
    "attributes": ["disabled", "key"],
    "description": "menu item of navigation"
  },
  "a-sub-menu": {
    "subtags": ["a-menu-item"],
    "attributes": ["children", "disabled", "key", "title"],
    "description": "sub menu of navigation"
  },
  "a-pagination": {
    "defaults": ["v-model"],
    "attributes": [
      "current", "defaultCurrent", "defaultPageSize", "hideOnSinglePage",
      "pageSize", "pageSizeOptions", "showQuickJumper",
      "showSizeChanger", "showTotal", "simple", "size", "total"
    ],
    "description": "A long list can be divided into several pages by ‘Pagination’, and only one page will be loaded at a time."
  },
  "a-steps": {
    "subtags": ["a-step"],
    "attributes": [
      "current", "direction", "labelPlacement",
      "progressDot", "size", "status", "initial"
    ],
    "description": "The whole of the step bar."
  },
  "a-step": {
    "defaults": ["title", "description"],
    "attributes": [
      "description", "icon", "status", "title"
    ],
    "description": "A single step in the step bar."
  },
  "a-auto-complete": {
    "defaults": [":dataSource", ":filterOption"],
    "attributes": [
      "allowClear", "autoFocus", "backfill", "dataSource",
      "defaultActiveFirstOption", "defaultValue", "disabled",
      "filterOption", "optionLabelProp", "placeholder", "value",
      "defaultOpen", "open"
    ],
    "description": "Autocomplete function of input field."
  },
  "a-cascader": {
    "defaults": [":options"],
    "attributes": [
      "allowClear", "autoFocus", "changeOnSelect", "defaultValue",
      "disabled", "displayRender", "expandTrigger", "fieldNames",
      "getPopupContainer", "loadData", "notFoundContent",
      "options", "placeholder", "popupClassName", "popupStyle",
      "popupPlacement", "popupVisible", "showSearch", "size",
      "suffixIcon", "value"
    ],
    "description": "Cascade selection box."
  },
  "a-checkbox": {
    "attributes": [
      "autoFocus", "checked", "defaultChecked",
      "disabled", "indeterminate"
    ],
    "description": "Checkbox component"
  },
  "a-checkbox-group": {
    "attributes": [
      "defaultValue", "disabled", "options", "value"
    ],
    "description": "Checkbox group component"
  },
  "a-date-picker": {
    "attributes": [
      "allowClear", "autoFocus", "dateRender", "disabled",
      "disabledDate", "getCalendarContainer", "locale", "open",
      "placeholder", "popupStyle", "dropdownClassName", "size",
      "suffixIcon", "defaultValue", "defaultPickerValue", "disabledTime",
      "format", "renderExtraFooter", "showTime", "showTime.defaultValue",
      "showToday", "value"
    ],
    "description": "To select or input a date of day."
  },
  "a-month-picker": {
    "attributes": [
      "allowClear", "autoFocus", "dateRender", "disabled",
      "disabledDate", "getCalendarContainer", "locale", "open",
      "placeholder", "popupStyle", "dropdownClassName", "size",
      "suffixIcon", "defaultValue", "defaultPickerValue", "format",
      "monthCellContentRender", "renderExtraFooter", "value"
    ],
    "description": "To select or input a date of month."
  },
  "a-range-picker": {
    "attributes": [
      "allowClear", "autoFocus", "dateRender", "disabled",
      "disabledDate", "getCalendarContainer", "locale", "open",
      "placeholder", "popupStyle", "dropdownClassName", "size",
      "suffixIcon", "defaultValue", "defaultPickerValue", "disabledTime",
      "format", "ranges", "renderExtraFooter", "showTime",
      "showTime.defaultValue", "value"
    ],
    "description": "To select or input a range date ."
  },
  "a-week-picker": {
    "attributes": [
      "allowClear", "autoFocus", "dateRender", "disabled",
      "disabledDate", "getCalendarContainer", "locale", "open",
      "placeholder", "popupStyle", "dropdownClassName", "size",
      "suffixIcon", "defaultValue", "defaultPickerValue",
      "format", "value"
    ],
    "description": "To select or input a date of week"
  },
  "a-form": {
    "subtags": ["a-form-item"],
    "attributes": [
      "form", "hideRequiredMark", "layout"
    ],
    "description": "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc."
  },
  "a-form-item": {
    "attributes": [
      "colon", "extra", "hasFeedback", "help",
      "label", "labelCol", "required", "validateStatus", "wrapperCol"
    ],
    "description": "Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc."
  },
  "a-input": {
    "attributes": [
      "addonAfter", "addonBefore", "defaultValue", "disabled",
      "id", "prefix", "size", "suffix", "type", "value"
    ],
    "description": "A basic widget for getting the user input is a text field."
  },
  "a-textarea": {
    "attributes": [
      "autosize", "defaultValue", "value"
    ],
    "description": "A basic widget for getting the user textarea is a text field."
  },
  "a-input-group": {
    "subtags": ["a-input"],
    "attributes": [
      "compact", "size"
    ],
    "description": "A basic widget for getting the user input is a text field."
  },
  "a-input-number": {
    "attributes": [
      "autoFocus", "defaultValue", "disabled", "formatter", "max", "min",
      "parser", "precision", "decimalSeparator", "size", "step", "value"
    ],
    "description": "Enter a number within certain range with the mouse or keyboard."
  },
  "a-radio": {
    "attributes": [
      "autoFocus", "checked", "defaultChecked", "disabled", "value"
    ],
    "description": "radio"
  },
  "a-radio-group": {
    "attributes": [
      "defaultValue", "disabled", "name", "options", "size", "value", "buttonStyle"
    ],
    "description": "radio of group"
  },
  "a-rate": {
    "attributes": [
      "allowClear", "allowHalf", "autoFocus", "character",
      "count", "defaultValue", "disabled", "value"
    ],
    "description": "Rate component."
  },
  "a-select": {
    "subtags": ["a-select-option"],
    "attributes": [
      "allowClear", "autoClearSearchValue", "autoFocus",
      "defaultActiveFirstOption", "defaultValue", "disabled",
      "dropdownClassName", "dropdownMatchSelectWidth", "dropdownStyle",
      "filterOption", "firstActiveValue", "getPopupContainer",
      "labelInValue", "maxTagCount", "maxTagPlaceholder", "mode",
      "notFoundContent", "optionFilterProp", "optionLabelProp",
      "placeholder", "showSearch", "showArrow", "size", "suffixIcon",
      "tokenSeparators", "value", "options", "defaultOpen", "open"
    ],
    "description": "Select component to select value from options."
  },
  "a-select-option": {
    "defaults": ["key", "value"],
    "attributes": [
      "disabled", "key", "title", "value", "class"
    ],
    "description": "select option."
  },
  "a-slider": {
    "attributes": [
      "autoFocus", "defaultValue", "disabled", "dots",
      "included", "marks", "max", "min", "range", "step",
      "tipFormatter", "value", "vertical"
    ],
    "description": "A Slider component for displaying current value and intervals in range."
  },
  "a-switch": {
    "attributes": [
      "autoFocus", "checked", "checkedChildren", "defaultChecked",
      "disabled", "loading", "size", "unCheckedChildren"
    ],
    "description": "Switching Selector."
  },
  "a-time-picker": {
    "attributes": [
      "addon", "allowEmpty", "autoFocus", "clearText",
      "defaultOpenValue", "defaultValue", "disabled",
      "disabledHours", "disabledMinutes", "disabledSeconds",
      "format", "getPopupContainer", "hideDisabledOptions",
      "hourStep", "inputReadOnly", "minuteStep", "open",
      "placeholder", "popupClassName", "secondStep",
      "suffixIcon", "use12Hours", "value"
    ],
    "description": "To select/input a time."
  },
  "a-transfer": {
    "attributes": [
      "dataSource", "disabled", "filterOption", "lazy",
      "listStyle", "locale", "operations", "render",
      "selectedKeys", "showSearch", "targetKeys", "titles"
    ],
    "description": "Transfer the elements between two columns in an intuitive and efficient way."
  },
  "a-tree-select": {
    "subtags": ["a-tree-select-node"],
    "attributes": [
      "allowClear", "defaultValue", "disabled", "dropdownClassName",
      "dropdownMatchSelectWidth", "dropdownStyle", "filterTreeNode",
      "getPopupContainer", "labelInValue", "loadData", "multiple",
      "placeholder", "searchPlaceholder", "showCheckedStrategy",
      "showSearch", "size", "suffixIcon", "treeCheckable",
      "treeCheckStrictly", "treeData", "treeDataSimpleMode",
      "treeDefaultExpandAll", "treeDefaultExpandedKeys",
      "treeExpandedKeys", "treeNodeFilterProp",
      "treeNodeLabelProp", "value"
    ],
    "description": "tree select"
  },
  "a-tree-select-node": {
    "defaults": ["key", "value"],
    "attributes": [
      "selectable", "disableCheckbox", "disabled",
      "isLeaf", "key", "title", "value", "scopedSlots"
    ],
    "description": "tree select node"
  },
  "a-upload": {
    "attributes": [
      "accept", "action", "directory", "beforeUpload",
      "customRequest", "data", "defaultFileList", "disabled",
      "fileList", "headers", "listType", "multiple", "name",
      "showUploadList", "supportServerRender", "withCredentials",
      "openFileDialogOnClick", "remove"
    ],
    "description": "Upload file by selecting or dragging."
  },
  "a-avatar": {
    "attributes": [
      "icon", "shape", "size", "src", "alt", "loadError"
    ],
    "description": "Avatars can be used to represent people or objects. It supports images, ‘Icon’s, or letters."
  },
  "a-badge": {
    "attributes": [
      "count", "dot", "offset", "overflowCount", "showZero",
      "status", "text", "numberStyle", "title"
    ],
    "description": "Small numerical value or status descriptor for UI elements."
  },
  "a-calendar": {
    "attributes": [
      "dateCellRender", "dateFullCellRender", "defaultValue",
      "disabledDate", "fullscreen", "locale", "mode", "monthCellRender",
      "monthFullCellRender", "validRange", "value"
    ],
    "description": "Container for displaying data in calendar form."
  },
  "a-card": {
    "attributes": [
      "actions", "activeTabKey", "headStyle", "bodyStyle",
      "bordered", "defaultActiveTabKey", "extra", "hoverable",
      "loading", "tabList", "title", "type"
    ],
    "description": "Simple rectangular container."
  },
  "a-card-meta": {
    "attributes": [
      "avatar", "description", "title"
    ],
    "description": "use Card.Meta to support more flexible content."
  },
  "a-carousel": {
    "attributes": [
      "afterChange", "autoplay", "beforeChange", "dots", "easing", "effect", "vertical"
    ],
    "description": "A carousel component. Scales with its container."
  },
  "a-collapse": {
    "subtags": ["a-collapse-panel"],
    "attributes": [
      "accordion", "activeKey", "bordered", "defaultActiveKey",
      "destroyInactivePanel"
    ],
    "description": "A content area which can be collapsed and expanded."
  },
  "a-collapse-panel": {
    "defaults": ["key"],
    "attributes": [
      "disabled", "forceRender", "header", "key", "showArrow"
    ],
    "description": "A content area which can be collapsed and expanded."
  },
  "a-list": {
    "subtags": ["a-list-item"],
    "attributes": [
      "bordered", "footer", "grid", "header",
      "itemLayout", "loading", "loadMore", "locale",
      "pagination", "size", "split", "renderItem", "rowKey"
    ],
    "description": "Simple List."
  },
  "a-list-item": {
    "attributes": [
      "actions", "extra"
    ],
    "description": "List Item"
  },
  "a-list-item-meta": {
    "attributes": [
      "avatar", "description", "title"
    ],
    "description": "List Item Meta"
  },
  "a-popover": {
    "defaults": ["content", "title"],
    "attributes": [
      "content", "title", "arrowPointAtCenter", "autoAdjustOverflow",
      "defaultVisible", "getPopupContainer", "mouseEnterDelay",
      "mouseLeaveDelay", "overlayClassName", "overlayStyle",
      "placement", "trigger", "visible", "align"
    ],
    "description": "The floating card popped by clicking or hovering."
  },
  "a-tooltip": {
    "attributes": [
      "arrowPointAtCenter", "autoAdjustOverflow",
      "defaultVisible", "getPopupContainer", "mouseEnterDelay",
      "mouseLeaveDelay", "overlayClassName", "overlayStyle",
      "placement", "trigger", "visible", "align"
    ],
    "description": "A simple text popup tip."
  },
  "a-table": {
    "attributes": [
      "bordered", "childrenColumnName", "columns", "components", "dataSource",
      "defaultExpandAllRows", "defaultExpandedRowKeys", "expandedRowKeys",
      "expandedRowRender", "expandIcon", "expandRowByClick", "footer",
      "indentSize", "loading", "locale", "pagination", "rowClassName", "rowKey",
      "rowSelection", "scroll", "showHeader", "size", "title", "customHeaderRow", "customRow"
    ],
    "description": "A table displays rows of data."
  },
  "a-tabs": {
    "subtags": ["a-tab-pane"],
    "attributes": [
      "activeKey", "animated", "defaultActiveKey",
      "hideAdd", "size", "tabBarExtraContent",
      "tabBarStyle", "tabPosition", "type", "tabBarGutter"
    ],
    "description": "Tabs make it easy to switch between different views."
  },
  "a-tab-pane": {
    "defaults": ["key"],
    "attributes": [
      "forceRender", "key", "tab"
    ],
    "description": "tab pane"
  },
  "a-tag": {
    "attributes": [
      "afterClose", "closable", "color", "visible"
    ],
    "description": "Tag for categorizing or markup."
  },
  "a-checkable-tag": {
    "attributes": [
      "checked"
    ],
    "description": "checkable tag"
  },
  "a-timeline": {
    "attributes": [
      "pending", "pendingDot", "reverse", "mode"
    ],
    "description": "Vertical display timeline."
  },
  "a-timeline-item": {
    "attributes": [
      "color", "dot"
    ],
    "description": "Vertical display timeline item."
  },
  "a-tree": {
    "attributes": [
      "treeData", "autoExpandParent", "checkable", "checkedKeys",
      "checkStrictly", "defaultCheckedKeys", "defaultExpandAll",
      "defaultExpandedKeys", "defaultExpandParent", "defaultSelectedKeys",
      "disabled", "draggable", "expandedKeys(.sync)", "filterTreeNode",
      "loadData", "loadedKeys", "multiple", "selectedKeys", "showIcon", "showLine"
    ],
    "description": "tree."
  },
  "a-tree-node": {
    "attributes": [
      "class", "style", "disableCheckbox", "disabled", "icon",
      "isLeaf", "key", "selectable", "title", "scopedSlots", "on"
    ],
    "description": "tree node."
  },
  "a-alert": {
    "defaults": ["message"],
    "attributes": [
      "afterClose", "banner", "closable", "closeText",
      "description", "icon", "message", "showIcon", "type"
    ],
    "description": "Alert component for feedback."
  },
  "a-drawer": {
    "defaults": ["message"],
    "attributes": [
      "closable", "destroyOnClose", "getContainer", "mask",
      "maskClosable", "maskStyle", "title", "visible",
      "wrapClassName", "width", "height", "className",
      "zIndex", "placement"
    ],
    "description": "Panel slides from screen edge."
  },
  "a-modal": {
    "defaults": ["visible", "title"],
    "attributes": [
      "afterClose", "bodyStyle", "cancelText", "centered",
      "closable", "confirmLoading", "destroyOnClose",
      "footer", "getContainer", "mask", "maskClosable",
      "maskStyle", "okText", "okType", "okButtonProps",
      "cancelButtonProps", "title", "visible", "width",
      "wrapClassName", "zIndex"
    ],
    "description": "Modal dialogs."
  },
  "a-popconfirm": {
    "defaults": ["title"],
    "attributes": [
      "cancelText", "okText", "okType", "title", "icon"
    ],
    "description": "A simple and compact confirmation dialog of an action."
  },
  "a-progress": {
    "defaults": ["percent"],
    "attributes": [
      "format", "percent", "showInfo", "status",
      "strokeLinecap", "strokeColor", "successPercent",
      "type"
    ],
    "description": "Display the current progress of an operation flow."
  },
  "a-skeleton": {
    "attributes": [
      "active", "avatar", "loading", "paragraph", "title"
    ],
    "description": "Provide a placeholder at the place which need waiting for loading."
  },
  "a-spin": {
    "attributes": [
      "delay", "indicator", "size", "spinning", "tip", "wrapperClassName"
    ],
    "description": "A spinner for displaying loading state of a page or a section."
  },
  "a-anchor": {
    "subtags": ["a-anchor-link"],
    "attributes": [
      "affix", "bounds", "getContainer", "offsetBottom", "offsetTop", "showInkInFixed"
    ],
    "description": "Hyperlinks to scroll on one page."
  },
  "a-anchor-link": {
    "defaults": ["href", "title"],
    "attributes": [
      "href", "title"
    ],
    "description": "anchor link"
  },
  "a-back-top": {
    "attributes": [
      "target", "visibilityHeight"
    ],
    "description": "BackTop makes it easy to go back to the top of the page."
  },
  "a-divider": {
    "attributes": [
      "dashed", "orientation", "type"
    ],
    "description": "A divider line separates different content."
  },
  "a-locale-provider": {
    "defaults": [":locale"],
    "attributes": [
      "locale"
    ],
    "description": "LocaleProvider provides a uniform localization support for built-in text of components."
  },
  "a-comment": {
    "attributes": [
      "actions", "author", "avatar", "content", "datetime"
    ],
    "description": "A comment displays user feedback and discussion to website content."
  },
  "a-config-provider": {
    "attributes": [
      "getPopupContainer"
    ],
    "description": "ConfigProvider provides a uniform configuration support for components."
  }
};

export {
  uiTags
};