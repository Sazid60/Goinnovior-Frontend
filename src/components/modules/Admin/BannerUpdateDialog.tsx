/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import UpdateBannerForm from "@/components/update-banner-form";

interface BannerUpdateDialogProps {
  banner: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BannerUpdateDialog = ({
  banner,
  open,
  setOpen,
}: BannerUpdateDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] bg-neutral-50 border-none rounded-xl p-6">
        <DialogTitle className="text-xl font-bold mb-2">
          Update Banner
        </DialogTitle>
        <UpdateBannerForm banner={banner} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
