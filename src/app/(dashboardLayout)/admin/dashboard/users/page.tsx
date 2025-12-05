import UserTable from '@/components/modules/Admin/UserManagement/UsersTable'
import { getUsers } from '@/services/admin/usersManagement'

const ManageUserPage = async () => {
    
    const data = await getUsers()
    const usersData = data.data

    return (
        <div className="space-y-6">
            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-(--color-dark)">
                        User Management
                    </h3>
                </div>
                <UserTable users={usersData}/>
            </div>
        </div>
    )
}

export default ManageUserPage
