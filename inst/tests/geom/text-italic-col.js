{
	"width" : 600,
	"height" : 400,
	"data" : [
		{
			"name" : "89316d93e94ab2dd70437fd77dbe71f4",
			"values" : [
				{
					"x" : 1,
					"y" : 1,
					"label" : "a"
				},
				{
					"x" : 2,
					"y" : 2,
					"label" : "b"
				},
				{
					"x" : 3,
					"y" : 3,
					"label" : "c"
				}
			]
		}
	],
	"scales" : [
		{
			"name" : "x",
			"type" : "linear",
			"domain" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4",
				"field" : "data.x"
			},
			"range" : "width",
			"zero" : false,
			"nice" : true
		},
		{
			"name" : "y",
			"type" : "linear",
			"domain" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4",
				"field" : "data.y"
			},
			"range" : "height",
			"zero" : false,
			"nice" : true
		},
		{
			"name" : "colour",
			"type" : "ordinal",
			"domain" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4",
				"field" : "data.label"
			},
			"range" : [
				"#F8766D",
				"#A3A500",
				"#00BF7D",
				"#00B0F6",
				"#E76BF3"
			],
			"points" : true
		}
	],
	"marks" : [
		{
			"type" : "rect",
			"name" : "background",
			"properties" : {
				"enter" : {
					"fill" : {
						"value" : "#E5E5E5"
					},
					"y2" : {
						"value" : 0
					},
					"y" : {
						"value" : 1000
					},
					"x" : {
						"value" : 0
					},
					"x2" : {
						"value" : 1000
					}
				}
			}
		},
		{
			"type" : "text",
			"from" : {
				"data" : "89316d93e94ab2dd70437fd77dbe71f4"
			},
			"properties" : {
				"update" : {
					"x" : {
						"field" : "data.x",
						"scale" : "x"
					},
					"y" : {
						"field" : "data.y",
						"scale" : "y"
					},
					"fill" : {
						"field" : "data.label",
						"scale" : "colour"
					},
					"text" : {
						"field" : "data.label"
					},
					"fontStyle" : {
						"value" : "italic"
					},
					"fontSize" : {
						"value" : 14.173
					}
				}
			}
		}
	],
	"axes" : [
		{
			"type" : "x",
			"scale" : "x"
		},
		{
			"type" : "y",
			"scale" : "y"
		}
	],
	"padding" : {
		"top" : 20,
		"right" : 20,
		"bottom" : 20,
		"left" : 20
	}
}