import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export default function DiscordIcon({ size }: { size?: SizeProp }) {
	return <FontAwesomeIcon icon={faDiscord} size={size} />;
}
