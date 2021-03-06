export default function Statistics() {
  return (
    <div class="bg-gray-50 pt-12 sm:pt-16">
      <div class="mt-10 pb-12 bg-white sm:pb-16">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Original
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-green-600">
                    100%
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Service
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-green-600">
                    24/7
                  </dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    86%
                  </dt>
                  <dd class="order-1 text-5xl font-extrabold text-green-600">
                    Users
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
