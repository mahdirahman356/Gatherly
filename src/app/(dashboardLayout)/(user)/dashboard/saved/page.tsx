import { UserEvents } from "@/components/modules/User/Events/UserEvents";
import { getSavedEvents } from "@/services/user/evenet.services";

const SavedEventsPage = async () => {

    const data = await getSavedEvents()
    const savedEvents = data.data

    return (
        <div className="space-y-6">
            {/* Saved Events */}
            <div>
                <div className="p-6">
                    <h3 className="text-lg font-bold">
                        Saved Events
                    </h3>
                </div>
                <UserEvents events={savedEvents} />
            </div>
        </div>
    );
};

export default SavedEventsPage;