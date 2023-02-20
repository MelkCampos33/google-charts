

// google graphic packages
google.charts.load('current', {packages: ['corechart'], 'language':'pt'})


function DrawGraphics() {

    table = new google.visualization.DataTable()

    table.addColumn('string', 'categorias')
    table.addColumn('number', 'valores')

    table.addRows([

        ['Educação', 2000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saúde', 50],
        ['Cartão de crédito', 900],
        ['Alimentação', 200]
    ])

    var options = {
        title: 'Tipos de Gastos',
        width: 800,
        hight: 800,
        is3D: true,
        legend: 'labeled',

        slices: {
            1:{color: 'grey'},
            2:{color: '#a6a6a6'},
            3:{color: 'grey'},
            4:{offset: 0.4},
            5:{color: 'grey'}
        }


        // put a hole in the graphic
        // 'pieHole': 0.4  
    }

    // drawing the table
    var graphic = new google.visualization.PieChart(document.getElementById('pieGraphicDiv'))
    graphic.draw(table, options)


    // second table - Line chart
    table = new google.visualization.DataTable()

    table.addColumn('string', 'mês')
    table.addColumn('number', 'gastos')
    table.addRows([
        ['jan',800],
        ['fev',400],
        ['mar',1100],
        ['abr',400],
        ['mai',500],
        ['jun',750],
        ['jul',1500],
        ['ago',650],
        ['set',850],
        ['out',400],
        ['nov',1000],
        ['dez',720]
    ])

    var options = {
        title: 'Gatos do Mes',
        width: 650,
        height: 300,
        curveType: 'function',
        vAxis: {
            format: 'currency',
            gridlines: { color: 'transparent' }
        },
        curvetype: 'function',
        legend: 'none'
    }

    var graphic = new google.visualization.LineChart(document.getElementById('lineChartDiv'))
    graphic.draw(table, options)

    var table = google.visualization.arrayToDataTable([

        ['Mês', 'Entrada', 'Saída'],
        ['jan',2500,1000],
        ['fev',1000,500],
        ['mar',3000,1300],
        ['abr',1500,1700],
        ['mai',5000,2250],
        ['jun',3567,3000],
        ['jul',3452,1468],
        ['ago',1833,5250],
        ['set',1800,1000],
        ['out',1800,1000],
        ['nov',3569,1500],
        ['dez',3000 ,1740] 
    ])

    var options = {

        title: 'Entradas e saídas da conta',
        widht: 800,
        height: 400,
        vAxis: {gridlines:{color:'transparent'},
        format: 'currency',
        title:'Valores'},
        hAxis: { title:'Mês'}

    }

    var graphic = new google.visualization.ColumnChart(document.getElementById('columnChartDiv'))
    graphic.draw(table, options)


    // Second Column 

    var table = new google.visualization.DataTable()
    table.addColumn('string', 'categorias')
    table.addColumn('number', 'valores')

    table.addRows([

        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde',50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ])

    var options = {
        title: 'Tipos de Gastos',
        height: 400,
        width: 800,
        vAxis: { gridlines: {count:0}, textPosition: 'none'},
        legend: 'none'
    }

    var graphic = new google.visualization.ColumnChart(document.getElementById('secondColumnChartDiv'))
    graphic.draw(table)



    // graphic with JSON

    var dadosJson = $.ajax({
        url: 'dados.json',
        dataType: 'json',
        async: false
    }).responseText

   

    var table = new google.visualization.DataTable(dadosJson)


    var options = {
        title: 'Usuários e Poupanças',
        height: 800,    
        width: 800


}

    var graphic = new google.visualization.BarChart(document.getElementById('graphicWithJson'))
    graphic.draw(table, options)




}   

google.charts.setOnLoadCallback(DrawGraphics)




 