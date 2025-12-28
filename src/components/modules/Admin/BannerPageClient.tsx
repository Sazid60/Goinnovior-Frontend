/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BannerUpdateDialog } from "@/components/modules/Admin/BannerUpdateDialog";
import { Button } from "@/components/ui/button";
import { Pencil, Video, FileText, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const BannerPageClient = ({ banner }: { banner: any }) => {
  const [updateOpen, setUpdateOpen] = useState(false);

  return (
    <div className="p-6 container mx-auto">
      <div className="flex items-center justify-between mb-8">
        <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <span className="text-gray-500">Admin</span>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-black">Manage Banner</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="md:text-2xl font-bold text-black">Current Banner</h2>
              <Button
                onClick={() => setUpdateOpen(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg gap-2"
              >
                <Pencil className="w-4 h-4" />
                Edit Banner
              </Button>
            </div>

            <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden mb-6 group">
              <video
                src={banner.video}
                className="w-full h-full object-cover"
                controls
                loop
                muted
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-teal-600">
                    Video
                  </span>
                </div>
              </div>
            </div>

            {/* Banner Details */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                      Title
                    </h3>
                    <p className="text-base font-medium text-black whitespace-pre-line">
                      {banner.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">
                      Description
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {banner.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">
                        Email
                      </h3>
                      <p className="text-sm font-medium text-black break-all">
                        {banner.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">
                        Phone/Location
                      </h3>
                      <p className="text-sm font-medium text-black">
                        {banner.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        {/* <div className="space-y-6">
          <div className="bg-linear-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Banner Management</h2>
            <p className="text-teal-50 leading-relaxed mb-6">
              Update your banner information to reflect changes on the homepage
              hero section. You can modify the title, description, contact
              information, and video.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-teal-50">
                  Video will auto-play on homepage
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-teal-50">
                  Leave video field empty to keep current video
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm text-teal-50">
                  Changes are applied immediately
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-black mb-4">
              Quick Actions
            </h3>
            <Button
              onClick={() => setUpdateOpen(true)}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg gap-2 h-12"
            >
              <Pencil className="w-5 h-5" />
              Edit Banner Details
            </Button>
          </div>
        </div> */}
      </div>

      <BannerUpdateDialog
        banner={banner}
        open={updateOpen}
        setOpen={setUpdateOpen}
      />
    </div>
  );
};

export default BannerPageClient;
