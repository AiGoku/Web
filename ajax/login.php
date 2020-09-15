<?php
	$user = $_POST['user'];
	$password = $_POST['password'];
	
	if($user == 'admin' && $password=='123456'){
		echo '{"result":true}';
	}else{
		echo '{"result":false}';
	}
?>