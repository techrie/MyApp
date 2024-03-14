const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center ml-1 my-1">
      <img
        className="h-4 mr-1"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <span className="px-2 font-normal text-sm text-gray-700">{name}</span>
      <span className="text-xs">{message}</span>
    </div>
  );
};

export default ChatMessage;
