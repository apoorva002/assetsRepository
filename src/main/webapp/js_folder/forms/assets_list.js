var assetForm = {
		"id" : "assetId",
		"title" : "Asset",
		"subtitle": "",
		"parentId": "assetListContainer",
		"namespace" : "",
		"enctype" : "multipart/form-data",
		"fields" : [{
				"type": "hidden",
				"name": "id",
				"id":true,
				"required": true,
				

			       },   
			       {
				"type" : "text",
				"name" : "skunumber",
				"label" : "SKU Number",
				"listable":true,
				"searchable":true,
				"required" : true,
				"placeHolder" : "SKU Number",
				
			      },
			      {
				"type" : "text",
				"name" : "name",
				"listable":true,
				"searchable":false,
				"label" : "Name",
				"placeHolder" : "Name",
				
				},
			       
			         {
					"type" : "text",
					"name" : "cost",
					"label" : "Cost ",
					"required" : false,
					
				}, {
					"type" : "text",
					"name" : "vendor",
					"label" : "Vendor",
					"required" : false,
					
			},
			{
					"type" : "text",
					"name" : "billNo",
					"label" : "BillNo.",
					"required" : false,
					
				}, 
				{
					"type" : "date",
					"name" : "purchaseDate",
					"label" : "Purchase Date ",
					"required" : false,
					
				}, {
					"type" : "date",
					"name" : "warrantyUpTo",
					"label" : "Warranty UpTo ",
					"required" : false,
					
				
			},
				
			 {
				"type" : "text",
				"name" : "description",
				"label" : "Description",
				"placeHolder" : "Description",
				

			}, {
				"type" : "text",
				"name" : "model",
				"label" : "Model",
				"placeHolder" : "model",
				

			},
			 {
					"type" : "file",
					"name" : "billDocument",
					"label" : "Bill Document",
					"accept" : "image/png, image/jpeg",
							
			}],
		"actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":"assets-list"},
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
				"success": {"href":"assets-list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Assets",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "assets"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "assets"
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
			"ajax": "http://localhost:9091/jet/asset",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/asset/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			//"dataNode": "data"

		},
		"create": {
			"ajax": "http://localhost:9091/jet/asset",
			"method": "post",
			"pathParams":{},
			"queryParams":{},
			"requestParams":{}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/asset",
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/asset/{id}",
			"method": "delete"
		}
	}

	};