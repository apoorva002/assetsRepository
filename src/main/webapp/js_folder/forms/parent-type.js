
var parentTypeForm = {
		"id": "parentid",
		"parentId":"parentTypeListContainer",
		"title" : "Parent Type",
		"subtitle": "",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [ 
			
			  {
				"type": "hidden",
				"name": "id",
				"id":true,
				"required": true,
				

			},
			{
				"type": "text",
				"name": "name",
				"label": "name",
				"required": true,
				"listable":true,
				"searchable": true,

			}
		],
		"actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":"parent-type-list"},
				"failure": {"script":"alert('Saving operation failed')"}
			},
			"cssClass": "btn-primary"
		}, {
			"name": "cancel",
			"type": "button",
			"label": "Cancel",
			"applyTo": "form",
			"cssClass": "btn-secondary",
			"redirects": {
				"success": {"href":"parent-type-list"}
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Parent-Type",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "parent-type"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "parent-type"
			}
		},
		{
			"name": "delete",
			"type": "button",
			"label": "Delete",
			"applyTo": "row",
			"cssClass": "btn-danger"
			/*"handler": {
				"script": "delete(event)"
			}*/
		}
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9091/jet/asset/parentType",
			"method": "get"
			//"dataNode": "data"
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/asset/parentType/{id}",
			"pathParams":{"id":"#id"},
			//"dataNode": "data"
			"method": "get"
		},
		"create": {
			"ajax": "http://localhost:9091/jet/asset/parentType",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/asset/parentType",
			"method": "put"
			
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/asset/parentType",
			"method": "delete"
			
		}
	}
	
	};