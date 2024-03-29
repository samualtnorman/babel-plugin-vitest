import type { PluginObj } from "@babel/core"
import * as t from "@babel/types"

export const babelPluginVitest = (): PluginObj => ({
	name: "babel-plugin-vitest",
	visitor: {
		MemberExpression(path) {
			if (path.node.object.type == "MetaProperty" && path.node.property.type == "Identifier" &&
				path.node.property.name == "vitest"
			)
				path.replaceWith(t.identifier("undefined"))
		}
	}
})

export { babelPluginVitest as default, babelPluginVitest as vitest }
