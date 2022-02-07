// This files contains logic for selecting dependent dropdown buttons
var $select1 = $( '#itemType' ),
		$select2 = $( '#subCategory' ),
    $options = $select2.find( 'option' );
    
$select1.on( 'change', function() {
	$select2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );
