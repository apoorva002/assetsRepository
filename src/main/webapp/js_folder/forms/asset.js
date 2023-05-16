var assetForm = {
	"id": "assetId",
	"title": "Asset",
	"subtitle": "",
	"parentId": "assetFormContainer",
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [
		{
			"type": "hidden",
			"name": "id",
			"id": true,
			"required": true,


		},
		{
			"type": "group",
			"name": "nameGroup",
			"label": "name",
			"col": 12,

			"fields": [
				
				{

					"type": "text",
					"name": "skunumber",
					"label": "SKU Number",
					"listable": true,
					"searchable": true,
					"required": true,
					"placeHolder": "SKU Number",
					"col": 6

				},
					{
					"type": "text",
					"name": "name",
					"listable": true,
					"searchable": false,
					"label": "Name",
					"placeHolder": "Name",
					"col": 6

				},
				{
					"type": "text",
					"name": "cost",
					"label": "Cost ",
					"required": false,
					"col": 6,
				},

				{
					"type": "text",
					"name": "vendor",
					"label": "Vendor",
					"required": false,
					"col": 6

				},
				{
					"type": "text",
					"name": "billNo",
					"label": "BillNo.",
					"required": false,
					"col": 6

				},
				{
					"type": "date",
					"name": "purchaseDate",
					"label": "Purchase Date ",
					"required": false,
					"col": 6

				},
				{

					"type": "date",
					"name": "warrantyUpTo",
					"label": "Warranty UpTo ",
					"required": false,
					"col": 6
				},
				{
					"type": "select",
					"name": "assetType",
					"label": "Asset Type",
					"provider": {
						"ajax": "http://localhost:9091/jet/assetType",
						"value": "id",
						"label": "name"

					},
					"required": true,
					"col": 6

				},
				{
					"type": "select",
					"name": "parentType",
					"label": "Parent Asset",
					"provider": {
						"ajax": "http://localhost:9091/jet/asset/parentType",
						"value": "id",
						"label": "name"
					},
					"required": true,
					"col": 6

				},
				{

					"type": "textarea",
					"name": "description",
					"label": "Description",
					"placeHolder": "Description",
					"col": 6


				},
				{
					"type": "text",
					"name": "model",
					"label": "Model",
					"placeHolder": "model",
					"col": 6


				},
				

			
				{
					"type": "file",
					"name": "billDocument",
					"label": "Bill Document",
					"accept": "image/png, image/jpeg",
					"col": 6
				}],
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
			"success": { "href": "assets-list" },
			"failure": { "script": "alert('Saving operation failed')" }
		},
		"cssClass": "btn-primary"
	},
	{
		"name": "cancel",
		"type": "button",
		"label": "Cancel",
		"applyTo": "form",
		"cssClass": "btn-secondary",
		"redirects": {
			"success": { "href": "assets-list" },
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
			"pathParams": { "id": "#id" }
			//"dataNode": "data"

		},
		"create": {
			"ajax": "http://localhost:9091/jet/asset",
			"method": "post",
			"pathParams": {},
			"queryParams": {},
			"requestParams": {}
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