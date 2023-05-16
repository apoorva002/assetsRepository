var assetAssignmentForm = {
		"id": "assetAssignment",
		"parentId": "aseetAssignmentListContainer",
		"title" : "Asset-Assignment Form",
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
					"type": "select",
					"name": "asset",
					"label": "Asset",
					"provider": {
						"ajax": "http://localhost:9091/jet/assetType",
						"value": "id",
						"label": "name"
					},
					"required": true
			},
			{
				"type": "select",
				"name": "employee",
				"label": "Employee",
				"provider": {
					"ajax": "",
					"value": "id",
					"label": "name"
				},
				"required": true
		},
			
		
		
			{
				"type": "date",
				"name": "issueDate",
				"label": "Issue Date ",
				"required": false
			},
			{
				"type": "select",
				"name": "issueCondition",
				"label": "Issue Condition",
				"options":[
			             {  "label":"Good",
			            	"name":"good",
			            	"value":"good",
			             },
			             {
			            	 "label":"Damaged",
			            	 "name":"damaged",
			            	 "value":"dameged",
			             }
				],
				
				"required": true
		},
			
			{
				"type": "date",
				"name": "returnDate",
				"label": "Return Date ",
				"required": false
			},
			{
				"type": "select",
				"name": "returnCondition",
				"label": "Return Condition",
				"options":[
		             {  "label":"Good",
		            	"value":"good",
		             },
		             {
		            	 "label":"Damaged",
		            	 "value":"dameged",
		             }
			],
				"provider": {
					"ajax": "",
					"value": "id",
					"label": "name"
				},
				"required": true
		},
		
            
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
				"success": {"href":"asset-assignment-list"},
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
				"success": {"href":"asset-assignment-list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Asset-Assignment",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "asset-assignment"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-danger",
			"handler": {
				"href": "asset-assignment"
			}
		},
		{
			"name": "delete",
			"type": "button",
			"label": "Delete",
			"applyTo": "row",
			"cssClass": "btn-danger",
			/*"handler": {
				"script": "delete(event)"
			}*/
		}
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9091/jet/assetAssignment",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/assetAssignment/{id}",
			"method": "get",
			"pathParams":{"id":"#id"}
			//"dataNode": "data"

		},
		"create": {
			"ajax": "http://localhost:9091/jet/assetAssignment",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/assetAssignment/{id}",
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/assetAssignment/{id}",
			"method": "delete"
		}
	}
	
};