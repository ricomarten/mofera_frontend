import DataTable,{ createTheme } from 'react-data-table-component';

// A super simple expandable component.
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
	{
		name: 'Centra',
		selector: row => row.title,
        sortable: true,
        width: "200px"   
	},
	{
		name: 'Wet Leaves ID',
		selector: row => row.WetLeavesID,
        sortable: true,
        width: "150px"   
	},
    {
		name: 'Weight',
		selector: row => row.Weight,
        sortable: true,
	},
    {
		name: 'Date',
		selector: row => row.Date,
        sortable: true,
        width: "150px"   
	},
];

const data = [
  	{
		id: 1,
		title: 'Centra Unit 1',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
	{
		id: 2,
		title: 'Centra Unit 2',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
    {
		id: 3,
		title: 'Centra Unit 3',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
    {
		id: 4,
		title: 'Centra Unit 4',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
    {
		id: 5,
		title: 'Centra Unit 5',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 6,
		title: 'Centra Unit 6',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 7,
		title: 'Centra Unit 7',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 8,
		title: 'Centra Unit 8',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 9,
		title: 'Centra Unit 9',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 10,
		title: 'Centra Unit 10',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 11,
		title: 'Centra Unit 11',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
  {
		id: 12,
		title: 'Centra Unit 12',
        WetLeavesID:'#123',
		Weight: '30 kg',
        Date:"31 Aug 2023"
	},
]

createTheme('solarized', {
    text: {
      primary: '#016B45',
      secondary: '#2aa198',
    },
    background: {
      default: '#E6F1ED',
    },
    context: {
      background: '#E6F1ED',
      text: '#016B45',
    },
    divider: {
      default: '#016B45',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');
  
function Table() {
	return (
		<DataTable
			columns={columns}
			data={data}
			//expandableRows
			//expandableRowsComponent={ExpandedComponent}
            pagination
            //theme="solarized"
            fixedHeader
            fixedHeaderScrollHeight="300px"
		/>
	);
};

export default Table;