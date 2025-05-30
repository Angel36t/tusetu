import { useState } from "react";
import VideoJSPlayerPublic from "../../../../../components/videoPublic/VideoJSPlayerPublic";
import WebinarModal from "./WebinarModal";
import { ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function WebinarVideo({ selectedWebinar }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    age: "",
    country: "",
    codeInput: "",
  });

  const isUnlocked = selectedWebinar.id === 1 || hasAccess;

  return (
    <div className="bg-[#2A2115] rounded-2xl p-5 sm:p-6 shadow-lg h-auto">
    {/* Video */}
    <div className="w-full aspect-video bg-black rounded-md flex items-center justify-center">
      {isUnlocked ? (
        <VideoJSPlayerPublic videoFile={selectedWebinar.videoFile} />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:opacity-80"
          onClick={() => setModalOpen(true)}
        >
          <LockClosedIcon className="h-16 w-16 text-[#EEFD64]" />
          <p className="text-sm text-white text-center">Haz clic para desbloquear</p>
        </div>
      )}
    </div>
  
    {/* Info */}
    <p className="text-xs text-gray-300 pt-4">{selectedWebinar.date}</p>
    <h3 className="text-lg font-semibold my-1">{selectedWebinar.title}</h3>
    <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
      <ClockIcon className="h-4 w-4 text-gray-400" />
      {selectedWebinar.duration}
    </p>
    <p
      className="text-sm text-gray-200 mt-2"
      dangerouslySetInnerHTML={{ __html: selectedWebinar.description }}
    ></p>
  
    {/* Modal */}
    <WebinarModal
      isOpen={modalOpen}
      closeModal={() => setModalOpen(false)}
      formData={formData}
      setFormData={setFormData}
      accessCode={accessCode}
      setAccessCode={setAccessCode}
      setUserRegistered={setUserRegistered}
      userRegistered={userRegistered}
      hasAccess={hasAccess}
      setHasAccess={setHasAccess}
    />
  </div>
  
  );
}
