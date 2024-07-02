import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';
import useTheme from '../context/theme';

function InfoDisplay({ profileData }) {
    const { themeMode } = useTheme();
    
    return (
        <section className={` overflow-hidden mt-8 p-6  rounded-lg shadow-lg ${themeMode === 'dark' ? 'bg-[#1d2a4a] ' : 'bg-white' }`}>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between ">
                <img
                    src={profileData.avatar_url}
                    alt="Profile Pic"
                    className="w-28 h-28 rounded-full md:mb-0 md:mr-6"
                />
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                        <div>
                            <span className="font-bold text-2xl">{profileData.name}</span>
                            <div className="text-sm text-[hsl(219,64%,45%)]">@{profileData.login}</div>
                        </div>
                        <div className="text-sm text-[#7f8a9f] mt-2 md:mt-0">
                            Joined {new Date(profileData.created_at).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </div>
                    </div>
                    <div className="text-[#7f8a9f] mb-6">{profileData.bio || 'No bio available'}</div>
                    {/* ------------------------------ */}
                    <div className={` p-6 rounded-lg mb-6 shadow-md ${themeMode === 'dark' ? 'bg-[#131b2e]' : 'bg-[#f6f8ff]'}`}>
                        <div className="flex justify-between text-center mx-4">
                            <div>
                                <div className="text-[#7f8a9f]">Repos</div>
                                <div className="font-bold ">{profileData.public_repos}</div>
                            </div>
                            <div>
                                <div className="text-[#7f8a9f]">Followers</div>
                                <div className="font-bold ">{profileData.followers}</div>
                            </div>
                            <div>
                                <div className="text-[#7f8a9f]">Following</div>
                                <div className="font-bold ">{profileData.following}</div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------ */}
                    <div className="flex justify-between">
                        <div className="flex items-center text-[#7f8a9f]">
                            <FaMapMarkerAlt className="mr-3" />
                            <span>{profileData.location || 'Not Available'}</span>
                        </div>

                        <div className="flex items-center text-[#7f8a9f]">
                            <FaTwitter className="mr-3" />
                            <span>{profileData.twitter_username ? `@${profileData.twitter_username}` : 'Not Available'}</span>
                        </div>
                    </div>
                    
                    <div className=' flex justify-between mt-6'>
                        <div className="flex items-center text-[#7f8a9f]">
                            <FaLink className="mr-3" />
                            <a href={profileData.blog} target="_blank" className="hover:underline">
                                {profileData.blog || 'Not Available'}
                            </a>
                        </div>

                        <div className="flex items-center text-[#7f8a9f]">
                            <FaBuilding className="mr-3" />
                            <span>{profileData.company || 'Not Available'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoDisplay;
