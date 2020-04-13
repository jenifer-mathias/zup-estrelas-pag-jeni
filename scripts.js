function listarDependentes() {

    $.getJSON( "http://localhost:8080/usuarios/2/dependentes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trJenifer'><td>" + val.nome + "</td><td>" + val.parentesco + "</td><td>" + val.renda + "</td></td>" )
        });

        console.log(items)

        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}

function listarDespesas() {

    $.getJSON( "http://localhost:8080/usuarios/2/despesas", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trFabio'><td>" + val.valor + "</td><td>" + val.vencimento + "</td><td>" + val.tipoDespesa + "</td></td>" )
        });

        console.log(items)
    
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}

function listarObjetivos() {

    $.getJSON( "http://localhost:8080/usuarios/2/objetivos", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trDouglas'><td>" + val.nome + "</td><td>" + val.valorTotal + "</td><td>" + val.numeroDeInvestimentos + "</td></td>" )
        });

        console.log(items)
    
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}

function listarAvaliacoes() {

    $.getJSON( "http://localhost:8080/usuarios/2/avaliacoes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trBraulio'><td>" + val.notaAvaliacao + "</td><td>" + val.comentario + "</td><td>" )
        });

        console.log(items)
    
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}

function listarSugestoes() {

    $.getJSON( "http://localhost:8080/usuarios/2/sugestoes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr class='trKofi'><td>" + val.titulo + "</td><td>" + val.descricao + "</td><td>" + val.tipoSugestao + "</td></td>" )
        });

        console.log(items)
    
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}