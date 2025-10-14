import { Card, CardContent } from "../ui/card"
import {
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
  Heart,
  Shield,
  UserCheck,
  Calendar,
  Building2,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const ProfessionalServices = () => {
    return (
        <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">
              Professional Background
            </h2>
            <div className="w-24 h-1 bg-[#ff6b4a] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-[#e0d8d3] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#c8d5f0] rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-[#4a5d82]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#3a3a3a]">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-3 bg-[#4a5d82] hover:bg-[#3a4d72] text-white px-4 py-1 text-sm rounded-full">
                      MBBS
                    </Badge>
                    <p className="font-semibold text-xl text-[#3a3a3a] mb-1">
                      College of Medical Sciences (COMS)
                    </p>
                    <p className="text-[#6b6b6b] text-lg">Chitwan, Nepal</p>
                    <p className="text-sm text-[#8b8b8b] mt-2">Affiliated with Kathmandu University (KU)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#e0d8d3] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#d4e8d4] rounded-2xl">
                    <Award className="w-8 h-8 text-[#4a6b4a]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#3a3a3a]">Credentials</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <Badge className="mb-2 bg-[#4a6b4a] hover:bg-[#3a5b3a] text-white px-4 py-1 text-sm rounded-full">
                      FMGE Qualified
                    </Badge>
                    <p className="text-[#6b6b6b] text-lg">Passed: January 2025</p>
                  </div>
                  <Separator className="bg-[#e0d8d3]" />
                  <div>
                    <Badge className="mb-2 bg-[#4a5d82] hover:bg-[#3a4d72] text-white px-4 py-1 text-sm rounded-full">
                      ACMR Registered
                    </Badge>
                    <p className="font-semibold text-[#3a3a3a] text-lg">
                      Assam Council of Medical Registration
                    </p>
                    <p className="text-sm text-[#6b6b6b] mt-2">
                      Registration Date: 15-05-2025
                    </p>
                    <div className="mt-3 inline-block">
                      <p className="text-sm font-mono bg-[#f5f0ed] px-4 py-2 rounded-lg border border-[#e0d8d3]">
                        Reg. No: 31002
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-[#e0d8d3] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden mb-16">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#e8d4f0] rounded-2xl">
                  <Briefcase className="w-8 h-8 text-[#6b4a82]" />
                </div>
                <h3 className="text-3xl font-bold text-[#3a3a3a]">Current Practice</h3>
              </div>

              <div className="space-y-8">
                <div className="bg-[#f5f0ed] p-8 rounded-2xl border border-[#e0d8d3]">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-7 h-7 text-[#4a5d82] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#3a3a3a] mb-2">Medical Officer</h4>
                      <p className="text-xl text-[#4a4a4a] font-medium mb-3">Jamuguri SHC (Jamuguri Civil)</p>
                      <div className="flex items-center gap-2 text-[#6b6b6b] mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">Sonitpur, Assam</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6b6b6b]">
                        <Calendar className="w-5 h-5" />
                        <span className="text-lg">4 months of dedicated service</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#e0d8d3]" />

                <div className="bg-[#f5f0ed] p-8 rounded-2xl border border-[#e0d8d3]">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-7 h-7 text-[#4a6b4a] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#3a3a3a] mb-2">Private Practice</h4>
                      <p className="text-xl text-[#4a4a4a] font-medium mb-3">Shubham Medical Store</p>
                      <div className="flex items-center gap-2 text-[#6b6b6b] mb-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">Halem, Pin-784170</span>
                      </div>
                      <div className="text-[#6b6b6b]">
                        <span className="text-lg">District: Biswanath, Assam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#d4e8d4] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-gradient-to-br from-[#f5fef5] to-[#e8f5e8]">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#d4e8d4] rounded-2xl">
                  <Shield className="w-8 h-8 text-[#4a6b4a]" />
                </div>
                <h3 className="text-3xl font-bold text-[#3a3a3a]">Patient Commitment</h3>
              </div>

              <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
                <p className="flex items-start gap-4 text-lg">
                  <Heart className="w-6 h-6 text-[#ff6b4a] mt-1 flex-shrink-0" />
                  <span>
                    I look forward to maintaining a friendly behavior towards my patients so that
                    they can share all of their health problems with no fear.
                  </span>
                </p>

                <p className="flex items-start gap-4 text-lg">
                  <Shield className="w-6 h-6 text-[#4a5d82] mt-1 flex-shrink-0" />
                  <span>
                    I also swear to listen to all of the patients' problems and maintain their
                    privacy and dignity by keeping patient details limited to myself.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}