import React, { useState } from "react";
import "../../style/AdminDesktop.css"
import AdminTable from "../../components/admin/AdminTable";
import AddUserButton from "../../components/admin/AddUserButton";
import { initialRows, columns} from "../../components/admin/UserDataSample";
import AdminSidebar from "../../components/admin/AdminSidebar";
import SearchButtonData from "../../components/admin/SearchButtonData";
import MasterDataFolder from "../../components/admin/MasterDataFolder";
import PageTitleAll from "../../components/admin/PageTitleAll";
import UserProfile from "../../components/admin/UserProfile";
import DashboardContent from "../../components/admin/DashboardContent";

function AdminPage() {
    const [rows, setRows] = useState(initialRows);
    const [columnData, setColumnData] = useState(columns);

    const addUser = (newUser) => {
        console.log("Adding new user:", newUser);
        setRows((prevRows) => [
            ...prevRows,
            {
                key: String(prevRows.length + 1),
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            }
        ]);
    };

    const handleEditUser = (updatedUser) => {
        setRows((prevUsers) =>
          prevUsers.map((row) =>
            row.id === updatedUser.id ? updatedUser : row
          )
        );
      };
       
    const deleteRow = (id) => {
        setRows(prevRows => prevRows.filter(row => row.id !== id));
    };

    const [isMinimized, setIsMinimized] = useState(false);

    const toggleMenu = () => {
        setIsMinimized(!isMinimized);
    };

    const [pageData, setPageData] = useState({
        title: 'Manage Users',
        description: 'Arrange username and data collections of ID'
    });
    
    const [currentComponent, setCurrentComponent] = useState('AdminTable');

    const handlePageDataChange = (title, description, componentKey, rows, columnData) => {
        setPageData({ title, description });
        setCurrentComponent(componentKey);
        setRows(rows)
        setColumnData(columnData)
    };
    
    const renderComponent = () => {
        switch (currentComponent) {
            case 'AdminTable':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'MasterDataFolder':
                return <MasterDataFolder />;
            case 'Dashboard':
                return <DashboardContent/>
            case 'CentraData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'WetLeavesData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'DryLeavesData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'FlourData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'ShippingInfoData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'CheckpointData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            case 'PackageData':
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
            default:
                return <AdminTable columns={columnData} rows={rows} deleteRow={deleteRow} editRow={handleEditUser} />;
        }
    };
    return (
        <div className="flex justify-start items-center bg-primary h-screen w-screen">
            <AdminSidebar isMinimized={isMinimized} toggleMenu={toggleMenu} onPageDataChange={handlePageDataChange}/>
            <div className={`bg-white h-97vh rounded-3xl transition-all duration-300 ${isMinimized ? 'w-19/20' : 'w-41/50'}`}>
                <PageTitleAll title={pageData.title} description={pageData.description}/>
                <UserProfile/>
                <SearchButtonData/>
                <div className={`flex justify-start pt-10 items-center gap-8 ${pageData.title !== 'Data Master' && pageData.title !== 'Dashboard' ? 'pl-0' : 'pl-12'}`}>
                    
                    {/* <MasterDataFolder/> */}

                    {/* <AdminTable rows={rows} setRows={setRows} deleteRow={deleteRow} editRow={handleEditUser}/>  */}
                    {renderComponent()}
                </div>

            </div>
        </div>
    )
}

export default AdminPage;
