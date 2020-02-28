import React from 'react';
import ReactApexChart from 'react-apexcharts'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';





const ApexChart = () => {



    const [loading, setLoading] = React.useState(true)

    const [state, setState] = React.useState({

        series: [{
            data: [40, 60, 22, 0, 72, 55, 38, 49, 88, 25]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 380
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'right'
                    },
                }
            },
            colors: ['#ff5722', '#4caf50', '#03a9f4', '#673ab7', '#f44336', '#9c27b0', '#009688', '#cddc39',
                '#ffc107', '#795548'
            ],
            dataLabels: {
                enabled: true,
                align: 'middle',
                // align: 'right',
                textAnchor: 'start',
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: ['black'],
                    width: 4,
                    dashArray: 0,
                },
                // position: 'right',
                style: {
                    colors: ['#fafafa'],
                    fontFamily: 'Vazir',

                },
                formatter: function (val, opt) {
                    if (val === 0) {
                        return opt.w.globals.labels[opt.dataPointIndex] + '    ';
                    }
                    return opt.w.globals.labels[opt.dataPointIndex];
                },
                // offsetX: 46,
                dropShadow: {
                    enabled: true
                }
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: ['آذربایجان غربی', 'ارومیه', 'ایلام', 'تهران', 'مشهد', 'سیستان و بلوچستان', 'کرمان',
                    'یزد', 'سمنان', 'کرمانشاه'
                ],
                max: 100,

            },
            legend: {
                show: true,
                fontFamily: 'Vazir',
            }
            ,
            yaxis: {

                labels: {
                    show: false
                }
            },
            title: {
                text: 'آمار',
                align: 'center',
                floating: true,

                style: {
                    fontFamily: 'Vazir',
                    fontSize: '24px',
                    fontWeight: '900',
                }
            },
            subtitle: {
                text: 'دسته بندی سوالات',
                align: 'center',
                fontFamily: 'Vazir',
                style: {
                    fontFamily: 'Vazir',
                    fontSize: '14px',
                }
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        }
                    }
                }
            }
        },


    });


    React.useEffect(() => {


        getCategoryChart(setState, setLoading);

    }, [])











    if (loading)
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>
    let height = (state.options.xaxis.categories.length) * 68;

    return (


        <div id="chart" style={{ overflow: 'visible' }}>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={height} />
        </div>
    )
}


export default ApexChart;










const getCategoryChart = (setState, setLoading) => {





    const
        headers = {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Vary': 'Authorization',


        }
    const url = 'http://185.55.226.171/api/chart';
    axios.get(url, { headers: headers })
        .then((response) => {
            // console.log(response.data.data)
            let values = [];
            let statics = [];
            if (response.data.status === 200) {

                if (response.data.data)
                    response.data.data.map((value, index) => {
                        if (value && value.category)
                            values.push(value.category.title)
                        if (value && value.percent)
                            statics.push(value.percent)
                    }
                    )
                if (statics.length !== values.length) {
                    statics = [];
                    values = [];
                }
                // console.log(statics, values)

                setState((old) => {
                    return ({
                        ...old, series: [{ data: statics }],
                        options: { ...old.options, xaxis: { categories: values, max: 100, } }

                    })
                })
                setLoading(false)

            }
            // store.dispatch({ type: 'ADMIN_SET_NOTIFICATIONS', payload: obj });

            //  //console.log(response.data)
        }

        ).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                //  //console.log('Singed out!!!')
                // store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                //console.log(error)
                // store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
            }

        })















}