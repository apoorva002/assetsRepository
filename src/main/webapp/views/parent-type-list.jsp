
  <!DOCTYPE html>
<html>
<head>
<title>Registration Form</title>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js_folder/forms/parent-type.js"></script>
</head>
<!-- body  -->
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="parentTypeListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>

<jsp:include page="../template/jetform-template.jsp" />
<script>
	$(document).ready(() => {
		var jetList=JetList({"id":"parentid", "parentId":"parentTypeListContainer", "form":parentTypeForm});
		jetList.render();
	});
</script>
 <%@include file="../theme/js_scripts.jsp" %>
</body>
</html>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 